//Create HTTP server
import exp from 'express'
const app=exp()

//use body parser middleware
app.use(exp.json())

//Set a port number
const port=3000
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening port ${port}...`))


//Test data(Replace this test data with DB)
    let users=[]
//Create USER API(REST API - REpresentational State Tansfer)

    //Route to handle GET req of Client(http://localhost:3000/users)
        app.get('/users',(req,res)=>{
            //read all users and send res
                res.json({message:"All users",payload:users})
        })
    //Route to handle POST req of Client
        app.post('/users',(req,res)=>{
            //get user from client
            const newUser=req.body
            //push user into users
            users.push(newUser)
            //send res
            res.json({message:"User created"})
        })
    //Route to handle PUT req of Client
        app.put('/users',(req,res)=>{
            //get modified user from client{}
            let modifiedUser=req.body
            //get index of existing user in users array
            let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
            //if index is not found
            if(index===-1){
                return res.json({message:"User not found"})
            }
            //update user with index
            users.splice(index,1,modifiedUser)
            //send res
            res.json({message:"User update"})
        })
    //Route to handle DELETE req of Client
        app.delete('/users/:id',(req,res)=>{
            //get id of user from url parameter
            let idOfUrl=Number(req.params.id)
            //find index of user
            let index=users.findIndex(userObj=>userObj.id===idOfUrl)
            //if index not found
            if(index===-1){
                return res.json({message:"User not found"})
            }
            //delete user by index
            users.splice(index,1)
            //send res
            res.json({message:"User removed"})
        })


        /*app.get('/users/:id',(req,res)=>{
            let idInUrl=Number(req.params.id)
            let index=users.findIndex(userObj=>userObj.id===idInUrl)
                if(index===-1){
                    return res.json({message:"User not found"})
                }
                return res.json(users[index])
        })*/

        app.get('/users/:id',(req,res)=>{
            let idInUrl=Number(req.params.id)
            let user=users.find(userObj=>userObj.id===idInUrl)
                if(user===undefined){
                    return res.json({message:"User not found"})
                }
                return res.json(user)
        })





let products=[]

//Create product API with below operation
        //Create new Product({productId,name,brand,price})
        app.post('/product',(req,res)=>{
            //get product from client
            const newPro=req.body
            //push product into products
            products.push(newPro)
            //send res
            res.json({message:"Product created"})
        })

        //Read all products
        app.get('/product',(req,res)=>{
                res.json({message:"All products",payload:products})
        })
        //Read all Product by brand
        app.get('/product/:Bran',(req,res)=>{
            let brandInUrl = req.params.Bran;
            let filteredProducts = products.filter(prod => prod.pBrand === brandInUrl);
    
            if (filteredProducts.length === 0) {
                return res.json({ message: "No product with the given brand is found" });
            }
            return res.json({ message: 'Products found', payload: filteredProducts });
        });
        //Update a product
        app.put('/product',(req,res)=>{
            //get modified product from client{}
            let modifiedpro=req.body
            //get index of existing product in products array
            let index = products.findIndex(proObj => proObj.productId === modifiedpro.productId);
            //if index is not found
            if(index===-1){
                return res.json({message:"Product not found"})
            }
            //update product with index
            products.splice(index,1,modifiedpro)
            //send res
            res.json({message:"Product updated"})
        })
        //Delete a product by id
        app.delete('/product/:id',(req,res)=>{
            //get id of product from url parameter
            let idOfUrl=Number(req.params.id)
            //find index of product
            let index=products.findIndex(proObj=>proObj.productId===idOfUrl)
            //if index not found
            if(index===-1){
                return res.json({message:"Product not found"})
            }
            //delete product by index
            products.splice(index,1)
            //send res
            res.json({message:"Product removed"})
        })
