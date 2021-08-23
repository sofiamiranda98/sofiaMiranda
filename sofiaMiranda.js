
    $("#producto").toggle();
   
   /* Carrito */

        function shoppingCart() {

            // Boton "Agregar al carrito" y Productos
                const addToShoppingCart = document.querySelectorAll( '.add-to-cart-btn' ); // Botón "Agregar al carrito"
                

                addToShoppingCart.forEach( ( addToCartButtons ) => {
                    addToCartButtons.addEventListener( 'click', addToCartBtnClick )
                });

                function addToCartBtnClick( event ) {
                    let btn = event.target;
                    const productos = btn.closest( '.producto' );

                    // Productos
                        const productoImg = productos.querySelector( '.producto-img' ).src;                        
                        const productoTitle = productos.querySelector( '.producto-title' ).textContent;
                        const productoPrice = productos.querySelector( '.producto-price' ).textContent;
                        
                
                    modalCart( productoImg, productoTitle, productoPrice );

                    cartCounterUpdate();
                    
                };    
               
                
            // Modal cart
                const showCart = document.querySelector( '.show-cart' );
                    
                function modalCart( productoImg, productoTitle, productoPrice ) {

                    // Que no se duplique el mismo producto en el Carrito
                        let productoTitleRepeat = showCart.getElementsByClassName( 'shoppingCartProductoTitle' );
                            
                        for( let i = 0; i < productoTitleRepeat.length; i++ ) {
                            if( productoTitleRepeat[i].innerHTML === productoTitle ) {
                                let productoTitleQuantity = productoTitleRepeat[i].parentElement.parentElement.querySelector( '.shoppingCartProductoQuantity' );
                                productoTitleQuantity.value++;
                                cartTotalPrice();
                            
                                return;
                            }
                        };

                    const shoppingCartDiv = document.createElement( 'div' );
                    const cartModal =
                        ` 
                            <div class="row shoppingCartProducto mt-3 text-center">
                                <div class="col-3">
                                    <img src=${productoImg} class="modal__img"/>
                                    <h6 class="mt-2 shoppingCartProductoTitle">${productoTitle}</h6>
                                </div> 
                                <div class="col-3">
                                    <p class="producto-price shoppingCartProductoPrice">${productoPrice}</p>
                                </div>
                                <div class="col-3">
                                    <input class="text-center shoppingCartProductoQuantity inputCuenta" type="number" value="1">
                                </div>
                                <div class="col-3">
                                    <button class="btn btn-danger" id="remove-plant-btn" data-name="${productoTitle}">
                                        x
                                    </button>
                                </div>
                            </div>
                        `
                                            
                    shoppingCartDiv.innerHTML = cartModal;
                    showCart.append( shoppingCartDiv );

                    // Botón Remove 
                        const removeButton = shoppingCartDiv.querySelector( '#remove-plant-btn' );

                        removeButton.addEventListener( 'click', removeProductoFromCart );

                    // Input Quantity
                        const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartProductoQuantity' );
                        
                        inputCartQuantity.addEventListener( 'change', cartQuantityChange );
                    
                        
                    cartTotalPrice();
                };

            // Cart Counter
                function cartCounterUpdate() {
                    const cartProductosLength = document.querySelectorAll( '.shoppingCartProducto' );
                    const cartCounter = document.querySelector( '#cart-counter' );
                    cartCounter.innerHTML = cartProductosLength.length;
                    cartTotalPrice();
                };  


            // Precio total del carrito
                function cartTotalPrice() {
                    var totalCount = 0;
                    const totalPrice = document.querySelector( '.total-price' );
                    const shoppingCartProductos = document.querySelectorAll( '.shoppingCartProducto' );
                    
                    shoppingCartProductos.forEach( ( shoppingCartProducto ) => {

                        const productoCartPriceElement = shoppingCartProducto.querySelector( '.shoppingCartProductoPrice' );
                        const productoCartPrice = Number( productoCartPriceElement.textContent.replace( '$', '' ) );

                        const productoCartQuantityElement = shoppingCartProducto.querySelector( '.shoppingCartProductoQuantity' );
                        const productoCartQuantity = Number( productoCartQuantityElement.value );

                        totalCount += productoCartPrice * productoCartQuantity;
                    });

                    totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
                };

            // Eliminar productos del carrito
                function removeProductoFromCart(event) {
                    const removeBtnClicked = event.target;
                    removeBtnClicked.closest( '.shoppingCartProducto' ).remove();
                    cartTotalPrice();
                    cartCounterUpdate();
                };
                
            // Cantidad del carrito (Input)
                function cartQuantityChange(event) {
                    const inputCartChange = event.target;
                    inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
                    cartTotalPrice();
                    cartCounterUpdate();
                };

            // Finalizar compra
                const botonFinalizarCompra = document.querySelector( '.btn-finalizar-compra' );

                botonFinalizarCompra.addEventListener('click', finalizarCompraTotal);

                function finalizarCompraTotal() {
                    showCart.innerHTML = '';
                    cartTotalPrice();
                    cartCounterUpdate();
                };

            // Vaciar todo el carrito
                const botonVaciarCarrito = document.querySelector( '.btn-vaciar-carrito' );
                
                botonVaciarCarrito.addEventListener('click', vaciarCarritoCompleto);

                function vaciarCarritoCompleto() {
                    showCart.innerHTML = '';
                    cartTotalPrice();
                    cartCounterUpdate();
                };
        };
        
        shoppingCart();
        

       
        
                
                
       
            