// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.29.3
// source: product.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty.pb";

export const protobufPackage = "product";

export interface ImageData {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface CategoryData {
  id: string;
  name: string;
  slug: string;
}

export interface ProductData {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
  description: string;
  active: boolean;
  categories: CategoryData[];
  images: ImageData[];
  createdAt: string;
  updatedAt: string;
}

/** CreateProduct */
export interface CreateProductRequest {
  name: string;
  sku: string;
  stock: number;
  price: number;
  description: string;
  categoryIds: string[];
  imageUrls: string[];
}

export interface CreateProductResponse {
  status: number;
  error: string[];
  data: ProductData | undefined;
}

/** FindOne */
export interface FindByIdRequest {
  id: string;
}

export interface FindByIdResponse {
  status: string;
  error: string[];
  data: ProductData | undefined;
}

/** Pagination */
export interface PaginationRequest {
  page: number;
  perPage: number;
}

export interface PaginationResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  next: boolean;
  prev: boolean;
}

/** FindMany */
export interface FindManyRequest {
  pagination: PaginationRequest | undefined;
  shopId: string;
  categoryId: string;
  searchTerm: string;
}

export interface FindManyResponse {
  status: number;
  error: string[];
  data: ProductData[];
  pagination: PaginationResponse | undefined;
}

/** UpdateProduct */
export interface UpdateProductRequest {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryIds: string[];
  imageUrls: string[];
}

export interface UpdateProductResponse {
  status: number;
  error: string[];
  data: ProductData | undefined;
}

/** DecreaseStock */
export interface DecreaseStockRequest {
  id: string;
  quantity: number;
}

export interface DecreaseStockResponse {
  status: number;
  error: string[];
}

/** ActivateProduct */
export interface ActivateProductRequest {
  id: string;
}

export interface ActivateProductResponse {
  status: number;
  error: string[];
}

/** DeleteProduct */
export interface DeleteProductRequest {
  id: string;
}

export interface DeleteProductResponse {
  status: number;
  error: string[];
}

/** Category */
export interface CreateCategoryRequest {
  name: string;
}

export interface CreateCategoryResponse {
  status: number;
  error: string[];
  data: CategoryData | undefined;
}

export interface FindAllCategoriesResponse {
  status: number;
  error: string[];
  data: CategoryData[];
}

export const PRODUCT_PACKAGE_NAME = "product";

export interface ProductServiceClient {
  /** Product */

  createProduct(request: CreateProductRequest): Observable<CreateProductResponse>;

  findById(request: FindByIdRequest): Observable<FindByIdResponse>;

  findMany(request: FindManyRequest): Observable<FindManyResponse>;

  updateProduct(request: UpdateProductRequest): Observable<UpdateProductResponse>;

  decreaseStock(request: DecreaseStockRequest): Observable<DecreaseStockResponse>;

  activateProduct(request: ActivateProductRequest): Observable<ActivateProductResponse>;

  deleteProduct(request: DeleteProductRequest): Observable<DeleteProductResponse>;

  /** Category */

  createCategory(request: CreateCategoryRequest): Observable<CreateCategoryResponse>;

  findAllCategories(request: Empty): Observable<FindAllCategoriesResponse>;
}

export interface ProductServiceController {
  /** Product */

  createProduct(
    request: CreateProductRequest,
  ): Promise<CreateProductResponse> | Observable<CreateProductResponse> | CreateProductResponse;

  findById(request: FindByIdRequest): Promise<FindByIdResponse> | Observable<FindByIdResponse> | FindByIdResponse;

  findMany(request: FindManyRequest): Promise<FindManyResponse> | Observable<FindManyResponse> | FindManyResponse;

  updateProduct(
    request: UpdateProductRequest,
  ): Promise<UpdateProductResponse> | Observable<UpdateProductResponse> | UpdateProductResponse;

  decreaseStock(
    request: DecreaseStockRequest,
  ): Promise<DecreaseStockResponse> | Observable<DecreaseStockResponse> | DecreaseStockResponse;

  activateProduct(
    request: ActivateProductRequest,
  ): Promise<ActivateProductResponse> | Observable<ActivateProductResponse> | ActivateProductResponse;

  deleteProduct(
    request: DeleteProductRequest,
  ): Promise<DeleteProductResponse> | Observable<DeleteProductResponse> | DeleteProductResponse;

  /** Category */

  createCategory(
    request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> | Observable<CreateCategoryResponse> | CreateCategoryResponse;

  findAllCategories(
    request: Empty,
  ): Promise<FindAllCategoriesResponse> | Observable<FindAllCategoriesResponse> | FindAllCategoriesResponse;
}

export function ProductServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createProduct",
      "findById",
      "findMany",
      "updateProduct",
      "decreaseStock",
      "activateProduct",
      "deleteProduct",
      "createCategory",
      "findAllCategories",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PRODUCT_SERVICE_NAME = "ProductService";
