
$(function(){
   let productList=$('#productList')

   fetchProducts(function (products){
      productList.empty();
      for(product of products){
         productList.append(createProductCard(product))
      }
   })
})