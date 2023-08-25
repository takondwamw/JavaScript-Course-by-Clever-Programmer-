class Bank{
    
    

    constructor(){
        this.balance = 0;
        this.screen = document.querySelector('.screen');
        this.alert = document.querySelector('.alert');
        this.tablePlace = document.querySelector('#here');
        this.msg = "";
        this.amount = 0;
        this.transactions = [];
        this.count = Math.floor(Math.random() * 10000 * 10000);
    }

    // deposit
    deposit(){
        this.amount = Number(document.querySelector('input[type="number"]').value);
       
        this.balance += this.amount;   
        this.msg = `${this.amount} has been deposited successfully`;
        // console.log(Number(document.querySelector('input[type="number"]').value));
        let mount = this.amount;
        let bal = this.balance;
        let ms = this.msg;
        let count = this.count;
        let t = {
            id : count,
            activity : 'Deposit',
            mount,
            bal,
            ms,
        }

        this.transactions.push(t)
        return this.display(this.msg,this.transactions);     
    }
    // 
    withdraw(){
        this.amount = Number(document.querySelector('input[type="number"]').value);
        if(this.balance > this.amount){
            this.balance -= this.amount;
            this.msg = `${this.amount} has been withdrawn successfully`;
            let mount = this.amount;
            let bal = this.balance;
            let ms = this.msg;
            let count = this.count;

            let t = {
                id : count,
                activity : 'Withdraw',
                mount,
                bal,
                ms,
            }
    
           this.transactions.push(t)

           return this.display(this.msg,this.transactions);

        }else{
            this.msg = `Insufficient Funds`;

            let mount = this.amount;
            let bal = this.balance;
            let ms = this.msg;
            let count = this.count
            let t = {
                id : count +=1,
                activity : 'Withdraw',
                mount,
                bal,
                ms,
            }
    
            this.transactions.push(t)

            return this.display(this.msg,this.transactions);


        }
    }

    display(info,t){
        this.screen.innerText = this.balance;
        this.alert.innerHTML = `<p class="text-dark lead"> ${info} </p>`;  
        this.transact(t);      
    }

    transact(transID){
        let accumulator = [];
        let final = "";
        // console.log(transID)
       let m =  transID.forEach((trans =>{
                accumulator.push(Object.values(trans).map( item => `<td>${item}</td>`).join(""));
       }));
    //     td == <td> , PerTransaction as eaach transation has been put in a td;
       accumulator.forEach( tdPerTransaction => {
        final += `<tr>${tdPerTransaction}</tr>`;
       })

        // console.log(final);
        return this.tablePlace.innerHTML = final;

    }

}

tkAcc = new Bank();

