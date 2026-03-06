import Text "mo:core/Text";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #flower;
    #keychain;
  };

  module Category {
    public func toText(category : Category) : Text {
      switch (category) {
        case (#flower) { "Flower" };
        case (#keychain) { "Keychain" };
      };
    };
  };

  type Product = {
    id : Nat;
    name : Text;
    description : Text;
    price : Nat;
    category : Category;
    available : Bool;
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : Order.Order {
      Nat.compare(p1.id, p2.id);
    };
  };

  let productMap = Map.empty<Nat, Product>();

  var nextId = 5;

  // Pre-seed products
  do {
    let initialProducts = [
      { id = 1; name = "Pink Rose"; description = "Handmade pink rose from pipe cleaners"; price = 799; category = #flower; available = true },
      { id = 2; name = "Sunflower"; description = "Bright yellow sunflower with brown center"; price = 899; category = #flower; available = true },
      { id = 3; name = "Bumblebee Keychain"; description = "Cute bumblebee with keychain ring"; price = 499; category = #keychain; available = true },
      { id = 4; name = "Heart Keychain"; description = "Red heart shaped keychain"; price = 399; category = #keychain; available = true },
    ];

    for (product in initialProducts.values()) {
      productMap.add(product.id, product);
    };
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    productMap.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    productMap.values().toArray().filter(
      func(product) { product.category == category }
    ).sort();
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (productMap.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func addProduct(name : Text, description : Text, price : Nat, category : Category, available : Bool) : async Product {
    let product : Product = {
      id = nextId;
      name;
      description;
      price;
      category;
      available;
    };

    productMap.add(nextId, product);
    nextId += 1;
    product;
  };
};
