
'use strict';

var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.php'),
            success : resolve,
            error   : reject
        });
    },
    // 添加到购物车
    addToCart : function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/add.php'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
    // 获取购物车列表
    getCartList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/list.php'),
            success : resolve,
            error   : reject
        });
    },
    // 选择购物车商品
    selectProduct : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/select.php'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
    // 取消选择购物车商品
    unselectProduct : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/un_select.php'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    },
    // 选中全部商品
    selectAllProduct : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/select_all.php'),
            success : resolve,
            error   : reject
        });
    },
    // 取消选中全部商品
    unselectAllProduct : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/un_select_all.php'),
            success : resolve,
            error   : reject
        });
    },
    // 更新购物车商品数量
    updateProduct : function(productInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/update.php'),
            data    : productInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除指定商品
    deleteProduct : function(productIds, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/delete_product.php'),
            data    : {
                productIds : productIds
            },
            success : resolve,
            error   : reject
        });
    },
}
module.exports = _cart;