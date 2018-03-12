var express=require('express');
var router=express.Router();
var dashboardModel=require.main.require('./models/admindashboard-model');

// Request Handler

router.all('/',function(req,res){
	 dashboardModel.productlist(function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result});
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});

//Exports
module.exports=router;
