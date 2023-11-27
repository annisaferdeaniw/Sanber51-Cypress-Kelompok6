describe('choose product(s)', () => {
    it('From Best Seller and click from the image', () => {
        cy.visit('')
        // Temukan dan pilih produk
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').first().click();
        // Verifikasi elemen-elemen yang seharusnya muncul
        cy.get('#product-price-1556 > .price').should('have.text', '$22.00');
        cy.get('#description').should('exist');
        cy.get('#tab-label-additional-title').should('exist');
        cy.get('#tab-label-reviews-title').should('exist');
        // Verifikasi bahwa gambar produk dapat dinext dan prev
        cy.get('.fotorama__arr--next > .fotorama__arr__arr').click();
        cy.get('.fotorama__arr--prev > .fotorama__arr__arr').click();
        // Verifikasi bahwa gambar produk dapat di zoom in dan out
        cy.get('.magnify-wheel-loaded > .fotorama__img').click();
        cy.get('.fotorama__zoom-in').click();
        cy.get('.fotorama__zoom-out').click();
        // Verifikasi bahwa gambar dapat diclose
        cy.get('.fotorama__fullscreen-icon').click();
       
      })
    it('Pilih dari hasil search', () => {
        // Buka situs web
        cy.visit('');
        // Click search bar
        cy.get('#search').first().click();
        // Ketik keyword dan click enter
        cy.get('#search').type('compression short{enter}');
        // validasi
        // Memeriksa apakah salah satu hasil pencarian memiliki teks tertentu
        // Memeriksa apakah elemen dengan kelas 'product-item-link' dan href sesuai muncul
        cy.get('a.product-item-link[href="https://magento.softwaretestingboard.com/echo-fit-compression-short.html"]')
        .should('exist')
        // Memeriksa apakah teks elemen mengandung kata 'Compression Short'
        .contains('Compression Short');
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();   
        cy.get('.base')
        .should('exist')
        // Memeriksa apakah teks elemen mengandung kata 'Compression Short'
        .contains('Compression Short');     
    });
    it('From Best Seller and click from the rating', () => {
        cy.visit('')
        // Temukan dan pilih produk
        cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-reviews-summary > .rating-summary > .rating-result').first().click();
        // Verifikasi bahwa elemen yang seharusnya muncul setelah diklik tidak ada atau tidak terlihat
        cy.get('.fotorama__active > .fotorama__img').should('not.exist');
       
      })
})