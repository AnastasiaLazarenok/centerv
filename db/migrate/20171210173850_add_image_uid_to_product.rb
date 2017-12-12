class AddImageUidToProduct < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :image_uid, :string
  end
end
