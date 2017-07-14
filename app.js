(function () {
    var app=angular.module("MobileStore",[]);
    var iphone={
        name:"iphone7 Plus",
        color:"apple Red",
        memory:"3GB RAM,256 GB ROM",
        price:1000000,
        image:"apple_iphone.png",
        isSoldOut:false,
        activeTab:"Description"

    };
    var one_plus= {
        name: "One_plus",
        color: "Silver",
        memory: "3GB RAM,128 GB ROM",
        price: 780000,
        image: "one_plus.png",
        isSoldOut: false,
        activeTab:"Description"
    };
    var lenovo= {
        name: "Lenovo_k6",
        color: "White",
        memory: "3GB RAM,64 GB ROM",
        price: 180000,
        image: "lenovo_k6.png",
        isSoldOut: false,
        activeTab:"Description"
    };
    app.controller("StoreController",function () {
        this.mobiles=[iphone,one_plus,lenovo];
        this.setActiveTab=function (mobile,tab) {
            mobile.activeTab=tab;
        }

    });
} )();
