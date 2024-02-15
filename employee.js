function addEmployee(){
    employee={
        id:empid.value,
        name:empname.value,
        addr:empaddr.value,
        desg:empdesg.value,
        exp:empexp.value,
        sal:empsal.value
            }
            if(employee.id=="" || employee.name==""||employee.addr==""||employee.desg==""||employee.exp==""||employee.sal==""){
                alert("please fill the input field")
            }
            else{
                  if(employee.id in localStorage){
                    alert("already exist")
                    }
                    else{
                     localStorage.setItem(employee.id,JSON.stringify(employee))
                      alert("employee added successfully")
                    }}
}

function search(){
    let key=emp.value
    let employee=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<div class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">Employee Details</h5>
     
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee id:${employee.id}</li>
      <li class="list-group-item">Name:${employee.name}</li>
      <li class="list-group-item">Address:${employee.addr}</li>
      <li class="list-group-item">Designation:${employee.desg}</li>
      <li class="list-group-item">Experience:${employee.exp}</li>
      <li class="list-group-item">Salary:${employee.sal}</li>
    </ul>
    <div class="card-body">
      
    </div>
  </div>`
}