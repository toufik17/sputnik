(function () {
    angular.module("donationEvents").controller("donationFormController", ['$scope', '$q', 'donationEventsResource', 'stripeService', function ($scope, $q, donationEventsResource, stripeService) {
        setInitialDonation();

        $scope.donate = function () {
            stripeService.getToken($scope.card).then(processDonation, handleError);
        };

        function processDonation(token) {
            donationEventsResource.donate(
                { donationEventId: $scope.donationEvent.id },
                { amount: $scope.amount, token: token }
            ).$promise.then(confirmDonation, handleError);
        }

        function confirmDonation(result) {
            $scope.message = {success: 'Your donation of $' + (result.amount / 100) + ' has been accepted. Thanks for donating!'};

            setInitialDonation();
            $scope.callback();
        }

        function handleError() {
            $scope.message = {error: 'Something went wrong. Please review your credit card information.'};
        }

        function setInitialDonation() {
            $scope.amount = undefined;
            $scope.card = {};
        }
    }]);
})();