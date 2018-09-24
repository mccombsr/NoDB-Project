let employees = [];
let id = 0;



module.exports = {
    getEmployees: (req, res)=>{
        return res.status(200).send(employees)
    },
    addEmployees: (req, res) =>{
        /*
            {
                name: {
                    first: 'first name',
                    last: 'last name'
                },
                image: {
                    large: '',
                    medium: '',
                    thumb''
                }
            }
        */
        req.body.id = id
        id++
        employees.push(req.body)
        return res.status(200).send(employees)
    },

    fire: (req, res)=>{
        const {index} = req.params
        employees.splice(index, 1)
        res.status(200).send(employees)
    },

    editEmployees: (req,res) =>{
        let index = null;
        employees.forEach((employee, i)=>{
            if(employee.id === Number(req.params.id)) index=i;
        })
        employees[index]={
            id: employees[index].id,
            name: req.body.name || employees[index].name
        };
        res.status(200).send(employees)
    }

}