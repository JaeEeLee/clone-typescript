/**
 * utility type 사례
 * pick : 선언되어진 interface type 에서 필요 부분만 추출하여 타입 사용
 *    반대 개념은 omit (필요하지않은 부분은 제외하고 type 사용)
 * use: Pick<Interface, 'a' | 'b' | 'c'>
 */

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오는 api
function fetchProducts(): Promise<Product[]> {
    // ..
}

// 불필요
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductdetail(
    shoppingItem: Pick<Product, "id" | "name" | "price">
) {
    //
}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
// 3. 특정 상품 정보를 업테이트 , 갱신하는 함수
// function updateProductItem(productItem: UpdateProduct) {}
//필요한 부분만 쓰려할때 이것이 불편하니 아래와 같이 사용

type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}
//? : 이거는 optional

// interface UserProfileUpdate {
//     uesrname?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }
// #1
//위와 아래와 같은 방식이다
// type UserProfileUpdate = {
//     username?: UserProfile["username"];
//     email?: UserProfile["email"];
//     profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// #2  partial utility 와 같게 구현했지만 실제 같진 않다 // 맵드 타입?
// type UserProfileUpdate = {
//     [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
// };
// type UserProfileKeys = keyof UserProfile;

//#3 Userprofile 에 국한되어있는 type
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
    [p in keyof T]: T[p];
};
