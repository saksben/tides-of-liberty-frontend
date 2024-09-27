export const getProductsByCollection = async (collectionSlug) => {
    const response = await fetch(`/api/collections/${collectionSlug}`)
    const products = await response.json()
    return products
}

export const getProductBySlug = async (productSlug) => {
    const response = await fetch(`/api/products/${productSlug}`)
    const product = await response.json()
    return product
}