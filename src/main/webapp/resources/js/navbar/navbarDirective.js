angular.module("sputnikDirectives").directive("sputnikNavbar", function () {
    return {
        templateUrl: 'resources/partials/navbar.html',
        restrict: 'A',
        controller: "profileController"
    }
});