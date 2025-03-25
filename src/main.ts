import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  INestMicroservice,
  ValidationPipe,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { RpcException, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protobufPackage } from './protos/product.pb';
import { GrpcExceptionFilter } from './products/products.controller';

async function bootstrap() {
    const logger = new Logger('Bootstrap');

  try {
    const app: INestMicroservice = await NestFactory.createMicroservice(
      AppModule,
      {
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: protobufPackage,
          protoPath: join('node_modules/grpc-nest-proto/proto/product.proto'),
        },
      },
    );

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        exceptionFactory: (errors) => {
          logger.error('Validation failed:', errors);
          return new RpcException({
            code: HttpStatus.BAD_REQUEST,
            message: 'Validation failed',
            details: errors,
          });
        },
      }),
    );

    app.useGlobalFilters(new GrpcExceptionFilter());
    app.enableShutdownHooks();

    await app.listen();
    logger.log('Product microservice is running');
  } catch (error) {
    logger.error('Failed to start application:', error);
    process.exit(1);
  }
}
bootstrap();
