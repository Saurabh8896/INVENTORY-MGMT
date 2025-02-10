

    function deleteproduct(id){
        const result = confirm("Are you sure to delete this product ?")

        if(result){
            fetch('/deleteproduct/'+ id, {
                method:'POST',
            }).then((res)=>{
                if(res.ok){
                    location.reload()
                }
            })
        }
    }