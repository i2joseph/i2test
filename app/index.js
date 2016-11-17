$.ajax({
  url:'http://localhost:3000/industryintel',
  type:'GET',
  contentType:'application/json',
  success:function(data){
    console.log('data',data);
  },
  error:function(err){
    console.log('error ', err);
  }
});

$.ajax({
  url:'http://localhost:3000/table',
  type:'GET',
  contentType:'application/json',
  success:function(data){
    console.log('data',data);
  },
  error:function(err){
    console.log('error ', err);
  }
});
