angular.module('TabsApp', [])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
            title: '首页',
            url: 'one.tpl.html'
        }, {
            title: '新闻',
            url: 'two.tpl.html'
        }, {
            title: '体育',
            url: 'three.tpl.html'
        }];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        }
    }]);