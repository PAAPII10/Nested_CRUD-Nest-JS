
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Ownerships {
    id: string;
    organization: string;
}

export interface Authors {
    id: string;
    name: string;
    organization: Ownerships;
}

export interface Lastupdates {
    author: Authors;
    updatedAt: DateTime;
}

export interface Items {
    id: string;
    type: string;
    attributes: JSON;
    css: JSON;
}

export interface FindCategoryInput {
    _id: string;
}

export interface CategoryInput {
    name: string;
    icon: string;
    description: string;
    status: string;
}

export interface UpdateCategoryInput {
    _id: string;
    name: string;
    icon: string;
    description: string;
    status: string;
}

export interface DataInput {
    title: string;
    description: string;
    templateId: string;
    categoryId: string;
    type: string;
    items?: Nullable<Items[]>;
    itemState: string;
    isTraceable: string;
    allocatedTime: string;
    institutionAllocatedTime: string;
    viewed: string;
    tags: string[];
    ownership: Ownerships;
    author: Authors;
}

export interface CategoryDto {
    _id: string;
    name: string;
    icon: string;
    description: string;
    status: string;
    updatedAt?: Nullable<DateTime>;
    createdAt: string;
}

export interface OwnerShip {
    id: string;
    organization: string;
}

export interface Author {
    id: string;
    name: string;
    organization: OwnerShip;
}

export interface LastUpdated {
    author: Author;
    updatedAt: DateTime;
}

export interface Item {
    id: string;
    type: string;
    attributes: JSON;
    css: JSON;
}

export interface Data {
    title?: Nullable<string>;
    description: string;
    templateId: string;
    categoryId: string;
    type: string;
    items: Item[];
    itemState: string;
    isTraceable: string;
    allocatedTime: string;
    institutionAllocatedTime: string;
    viewed: number;
    tags: string[];
    ownership: OwnerShip;
    author: Author;
    lastUpdatedInfo: LastUpdated;
    createdAt: DateTime;
    publishedAt: DateTime;
}

export interface IQuery {
    categories(): CategoryDto[] | Promise<CategoryDto[]>;
    findCategory(input: FindCategoryInput): CategoryDto | Promise<CategoryDto>;
    data(): Data[] | Promise<Data[]>;
}

export interface IMutation {
    createCategory(input: CategoryInput): CategoryDto | Promise<CategoryDto>;
    updateCategory(input: UpdateCategoryInput): CategoryDto | Promise<CategoryDto>;
    deleteCategory(input: FindCategoryInput): string | Promise<string>;
    createData(input: DataInput): Data | Promise<Data>;
}

export type DateTime = any;
export type JSON = any;
type Nullable<T> = T | null;
