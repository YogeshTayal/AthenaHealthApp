'use strict';

/**
 * @ngdoc function
 * @name athenaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the athenaApp
 */
angular.module('athenaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 3000;
  	$scope.noWrapSlides = false;
  	$scope.active = 0;
    $scope.slides = [{
      image: '/images/image002.png',
      title: 'Opportunities for students & recent grads',
      text: 'Slide 1 text',
      btnText: 'View job openings',
      id: 0
    },{
      image: '/images/image002.png',
      title: 'Opportunities for students & recent grads',
      text: 'Slide 2 text',
      btnText: 'View job openings',
      id: 1
    },{
      image: '/images/image002.png',
      title: 'Opportunities for students & recent grads',
      text: 'Slide 3 text',
      btnText: 'View job openings',
      id: 2
    }];

    $scope.athenistas = [{
    	image: '/images/greg-joondeph_breidbart_wat.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/anita_gupta_sf.jpg',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/ligmie_preval_wat.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/james_dantzler_atlanta_rec.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/amanda__montgomery_-atlanta_rec.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/andrew_kahn_sales_rec.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/stephanie_ellis_austin_rec.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    },{
    	image: '/images/kevin_weaver_watertown.png',
    	department: 'Product Innovation',
    	name: 'Anita Gupta',
    	designation: 'Product Innovation Manager',
    	location: 'San Francisco, CA'
    }];
  });
