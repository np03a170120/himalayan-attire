<?php include 'header.php'?>
<!-- Main Banner -->
<section class="main-banner main-banner-slider">
    <div class="main-banner-single" style="background-image:url(images/banner-img.jpg)">
    </div>

    <div class="main-banner-single" style="background-image:url(images/banner-img.jpg)">
    </div>

    <div class="main-banner-single" style="background-image:url(images/banner-img.jpg)">
    </div>
</section>

<!-- featured product -->
<section class="main-featured-product sec-padding">
    <div class="container">
        <div class="sec-title">
            <h2>Featured product</h2>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="product-card-big">
                    <a href="#">
                        <div class="pcb-img">
                            <img src="./images/dummy-red.png" alt="">
                            <img src="./images/red.jpg" class="img-top" alt="">
                        </div>
                        <div class="quick-view">
                            <button class="uk-button uk-button-default" href="#modal-center" uk-toggle>Quick
                                View</button>
                        </div>
                        <div class="quick-view-content">
                            <div id="modal-center" class="uk-flex-top" uk-modal>
                                <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                                    <button class="uk-modal-close-default" type="button" uk-close></button>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="modal-image">
                                                <img src="./images/dummy-red.png" alt="">
                                                <img src="./images/red.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="product-description">
                                                <div class="pd-title">
                                                    <h6>Red Velvet</h6>
                                                </div>
                                                <div class="pcb-price">
                                                    <span>$1000</span>
                                                </div>
                                                <div class="pd-text">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Voluptates optio dicta provident natus repellat earum obcaecati
                                                        a esse. Assumenda tenetur ab minus quisquam distinctio. Alias
                                                        nam maiores autem aspernatur similique?
                                                        esse. Assumenda tenetur ab minus quisquam distinctio. Alias
                                                        nam maiores autem aspernatur similique?

                                                    </p>
                                                </div>
                                                <div class="pd-wrapper">
                                                    <div class="pd-size">
                                                        <h6>color:</h6>
                                                        <div class="color-box"></div>
                                                    </div>
                                                    <div class="pd-size">
                                                        <h6>Size:</h6><span>76"L X 28"W</span>
                                                    </div>
                                                    <div class="pd-size">
                                                        <h6>Weight:</h6><span>130 grams approx</span>
                                                    </div>
                                                </div>
                                                <div class="btns">
                                                    <div class="co-quantity">
                                                        <input required="" type="number" value="1" min="0" max="100">
                                                    </div>
                                                    <div class="add-to-cart">
                                                        <a href="#">add to cart</a>
                                                    </div>
                                                    <div class="add-to-cart enquiry">
                                                        <a href="#">enquiry</a>
                                                    </div>
                                                </div>
                                                <div class="view-detail">
                                                    <a href="#">check Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pcb-title">
                            <h6>Red velvet</h6>
                        </div>
                        <div class="pcb-price">
                            <span>$1000</span>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section>
<?php include 'footer.php'?>