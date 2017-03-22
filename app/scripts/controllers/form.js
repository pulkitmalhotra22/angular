    'use strict';
    angular.module('simpleFormApp').controller('formCtrl', ["$scope", function ($scope) {
        /*Default values*/    
        $scope.validUID = false;
        $scope.validName = false;
        $scope.validPhone = false;
        $scope.validEmail = false;
        $scope.validCharity = false;
        $scope.validAmount = false;
        $scope.checkValidSubmit = false;
        $scope.checkValidReset = false;
        $scope.confirmPage=false;
        $scope.mainPage=true;

        /* Validate form fields to enable submit, reset buttons*/
        $scope.validateUID = function () {
            if ($scope.editContactForm.userid !== null || $scope.editContactForm.userid !== " ") {
                $scope.validUID = true;
            }
            $scope.enableSubmit();
        };
        
        $scope.validateName = function () {
            if ($scope.editContactForm.fullname !== null || $scope.editContactForm.fullname !== " ") {
                $scope.validName = true;
            }
            $scope.enableSubmit();
        };
        $scope.validateEmail = function () {
            if ($scope.editContactForm.email !== null || $scope.editContactForm.email !== " ") {
                $scope.validEmail = true;
            }
            $scope.enableSubmit();
        };
                
        $scope.validatePhone = function () {
         if ($scope.editContactForm.number !== null || $scope.editContactForm.number !== " ") {
                $scope.validPhone = true;
            }
            $scope.enableSubmit();
        };
        
        $scope.validateSelect = function () {
            if ($scope.editContactForm.charity !== null || $scope.editContactForm.charity !== " ") {
                $scope.validCharity = true;
            }
            $scope.enableSubmit();
            
        };
        $scope.validateAmount = function () {
            if ($scope.editContactForm.amount !== null || $scope.editContactForm.amount !== " ") {
                $scope.validAmount = true;
            }
            $scope.enableSubmit();
            
        };
        
            
        /* 
        Populate charity drop down list using data binding. 
        This can also be extracted via an AJAX call to read it from a JSON file
        */
        $scope.charityOpts = [{
            "orgid": 1,
            "name": "ABC"
        }, {
            "orgid": 2,
            "name": "XYZ"
        }, {
            "orgid": 3,
            "name": "123"
        }];

        
        //Enable Submit button
        $scope.enableSubmit = function () {
            if ($scope.validUID && $scope.validName && $scope.validEmail && $scope.validPhone && $scope.validCharity) {
                $scope.checkValidSubmit = true;
                $scope.checkValidReset = true;
                
            } else if ($scope.validUID || $scope.validName || $scope.validEmail || $scope.validPhone || $scope.validCharity){
                $scope.checkValidReset = true;
            } else {
                $scope.checkValidSubmit = false;
                $scope.checkValidReset = false;
            }
        };
        
        //Enable Submit button
        $scope.resetForm = function () {
             $scope.editContactForm.$setPristine();
    $scope.editContactForm.$setUntouched();
        };
        
        //Enable Confirmation DIV on successfull submit
        $scope.confirmForm = function(){
            $scope.confirmPage=true;
            $scope.mainPage=false;
        }
    }]);
