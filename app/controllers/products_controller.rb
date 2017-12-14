class ProductsController < ApplicationController
    respond_to :html, :js
    def index
        @products = Product.all
    end

    def new
        @product = Product.new 
    end
    def create
        @product = Product.new(product_params)
        respond_to do |format|
            if @product.save
                format.html { redirect_to action: "index"}
            else
                format.html { render action: "new" }
            end
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :producer, :price, :image)
    end
end
