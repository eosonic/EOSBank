![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/banner.png)
 
   
## EOS Bank
![Bank Stutas](https://github.com/eosonic/EOSBank/blob/master/image/open.png) 

EOS bank is the infrastructure of EOS blockchain, which allows DApp developers to pay minimal interest on a large amount of CPU resources that will be paid to all of the bank's depositors, and these lease transactions are executed through smart contracts.

### Demand analysis
With the development of EOS ecology, EOS CPU resources will become more and more expensive, and the CPU needs of many developers are not sustainable, and a lot of CPU needs will be exploded in a short time.In response to the massive CPU resources needed for a short-term promotion during the World Cup/Christmas, the EOS bank serves as the infrastructure for the EOS blockchain to provide short-term, rapid rental of CPU resources.

### How to used
  
Use any EOS wallet app, to the account of the contract: eosiocpubank sent alittle EOS, multiple CPU please see the next section of the current lease price, number will be automatically calculated for you the lease contract, and the delegate EOS you get CPU resources, 0.5 seconds after the delegate to the account, you can even write other account name in MEMO, we will write to you this account provides leasing, don't write the default account name lease give yourself.
  
The amount of EOS transferred determines the amount of CPU delegate. For example, the transfer of 0.05 EOS will immediately delegate CPU 9.1249 resources for you. The MEMO can be written to the lease time you need.
  
MEMO: "3d/7d" will automatically delegate you for 4 days /7 days. Below is the transfer using wallet, which will immediately get 5.2146 CPU resources for 4 days. 
  
![rent](https://github.com/eosonic/EOSBank/blob/master/image/rent4.png)
  
Use command line mode:
  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" ""       
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "4d"      
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "7d" 

If you need to rent CPU for other accounts, please write the account name in the remarks:
  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "youraccount"  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "4d youraccount"      
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "7d youraccount" 
  
Caution: due to the large number of SPAM sending 0.0001 EOS on EOS blockchain, the lowest rental supported by EOS bank currently sends 0.01 EOS. We recommend sending 0.05, enabling you to get 9.1249 CPU resources for EOS.

### Current lease price

sent | get CPU | duration | 
------------ | -------------|-------------
0.1 EOS | 18.2499 EOS CPU | 24 Hours  | 
0.1 EOS | 10.4285 EOS CPU | 4 days | 
0.1 EOS | 7.2989 EOS CPU | 1 week | 

### Dynamic savings model

EOS bank contract eosiocpubank supports saving your EOS currency to the bank, whenever there is any lease transaction, we will immediately dividends to each savings account.

In order to keep the rate of return of savings stable, we limited the size of the savings pool. When the unstaked of the contract eosiocpubank is less than 50000.0000 EOS, the contract will automatically open the deposit, which is regarded as the bank's lack of funds needs to be supplemented. You can transfer more than 10 EOS to the contract, and write "deposit" in the MEMO (no double quotation marks).This will be recorded as a deposit.

In contrast, whenever the unstaked account of the contract eosiocpubank is larger than 50000.0000 EOS, the contract automatically closes the deposit , you will be unable to send the EOS to the bank, and any transfer that includes deposit in the remarks will be automatically rejected by the system.

This keeps the Banks' savings pools at the right size to prevent yields on all savers from falling because of excess deposits.

### How to saving

Use any EOS wallet to sent to contract account: **eosiocpubank** transfer more than 10 EOS, must be less than 1000 EOS, MEMO deposit, support any deposit sent, they will be recorded under your account.
  
Deposit is not supported for other accounts. The MEMO can only be written into deposit. Please refer to the previous chapter.wait for bank savings to be reduced before operating savings.

In the previous chapter, if the EOS bank's saving pool is full(more than 5000EOS), it will be unable to accept savings, and the smart contract will automatically refuse customer deposits.Please wait for bank savings to be reduced before operating savings.
  
  ![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/deposit2.png)


### Dividend settlement model

The interest received by the completion of A leasing transaction is L, and we will take a snapshot of the current savings assets, set the total balance of platform savings as N, and A customer savings as A, then the customer will get A/NL interest dividend immediately according to the amount of savings A.

Your total interest income is affected by the dynamic rental rate. Let's say the platform has 10,000 EOS , you save 5,000, and when we rent out 7,500, you get 75% real interest, that is, set the interest rate **multiply** the rental rate is equal to the real interest rate.
Actual calculation demonstration:

We received A lease request of 10 EOS. At present, the computing platform unstaked was 5000 EOS, and the customer stored 100 EOS on the platform. Then A/NL=100 savings /5000 total amount X10 interest =0.2EOS.This snapshot dividend has nothing to do with rental rates.

### Check your savings and dividends

Use command line mode:  

>cleos get table **eosiocpubank** youraccount deposit    
  
If you don't have an EOS software or a delivery tool for the Cleos command, perform the following steps to query your deposits;
1. Open the API query website: http://apirequest.io/
2. Select post, type https://api.eosnewyork.io/v1/chain/get_table_rows in the URL column
3. in the Request Body,input：{"json":"true","code":"eosiocpubank","scope":"youraccount","table":"deposit"}
4. click Send One
5. After waiting for a few seconds, in the Body, the amount will show the saving balance and the dividend, and the illustration shows the balance of the account cpubankfound. Please change it to your account.  
  
![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/deposit.png)  
### Withdrawal and enquiry of withdrawal progress:
  
If you need to withdraw,bank support only one-time extract all add attach bonuses,use any EOS wallet send 0.0001 EOS to the contract eosiocpubank can withdraw funds into the queue, attention, please do not write any note MEMO, according to the EOS system setting, lift the mortgage needs to wait for 3 days, the contract will automatically send you in 3 days all EOS to your account,use the command line:
  
> cleos transfer youraccount **eosiocpubank** "0.0001 EOS" ""    
  
After the withdrawal command is sent, use the command line mode to query the withdrawal progress:  
  
>cleos get table **eosiocpubank** youraccount refunds  

If you don't have an EOS software or a delivery tool for the Cleos command, perform the following steps to query your withdrawal;
  
If you don't have an EOS software or a delivery tool for the Cleos command, perform the following steps to query your deposits;
1. Open the API query website: http://apirequest.io/
2. Select post, type https://api.eosnewyork.io/v1/chain/get_table_rows in the URL column
3. in the Request Body,input：{"json":"true","code":"eosiocpubank","scope":"youraccount","table":"refunds"}
4. click Send One
5. After waiting for a few seconds,request_time will show how long it will be before your withdrawal reaches your account.This is a UNIX time.

### cancel withdrawal application

If within 72 hours after the withdrawal order to send you want to cancel your withdrawal, please use any EOS wallet send 0.0002 EOS to the contract eosiocpubank can cancel your withdrawal request, attention, please do not write any note MEMO, you can also use the command line to cancel the show command, this is effective immediately, you will immediately participate in rent and reap the benefits of share out bonus of single next time.

> cleos transfer youraccount **eosiocpubank** "0.0002 EOS" ""      

### EOS Banks advantages
    
- #### Strong capital adequacy  
  
We support customers to save their EOS in amounts greater than 10 EOS. We will return the interest income to the savers.Diversified sources of funds, strong capital guarantee, fully guarantee the rapidly changing rental demand.

Fully automatic lease order execution

In response to rental requests with smart contracts, anyone can send EOS to the contract account **eosiocpubank**, and the system immediately delegate the CPU to the sent customer at the current price.

- #### Advanced leasing cycle algorithm
  
At the same time, it can meet the temporary resource demand and long-term resource leasing demand of customers, and the intelligent contract will automatically quote according to the required cycle.
  
- #### full automatic dynamic highly liquid asset commitment pool
  
Automatic pools of saving control model, rapid automatic entrust the second mortgage and the mortgage, so fast the business model makes the operation of the contract is busy, a series of dynamic financial models, make pomelo endowment bank capital will have high turnover rate, and yield reached the highest state of low rental prices but at the same time.This would provide high returns to savers and also lower prices for users.
  
- #### contract developer of the real name system
  
In order to maintain the security of funds, for large depositors, we used the account permission isolation mechanism. The contract eosiocpubank does not have the permission to transfer EOS EOS, which fundamentally prevents the theft of large funds. Meanwhile, we disclosed the team developer's identity information for inquiry.

### VIP services
  
If you are a depth of EOS game players, or are you a quantitative robot operation, the time is not allow you to track the status of their resources frequently, or your business need round-the-clock availability, pomelo investment Banks to provide high-end custom service, we will monitor your EOS account, whenever resources utilization rate more than 95%, we will automatically mortgage CPU for you, make you in a state of "god of war", also, when you are in, we detect your resource utilization rate is less than 85% we will help you remove part of the mortgage, the dynamic of mortgage and the mortgage operation allows you to improve the efficiency of the lease,It saves you a lot of search time and mortgage costs.Please consult the last chapter of this article and contact us to design the best automatic rental model for you.

### Bank closing time
  
Just as the traditional bank needs to settle, the EOS bank will close for one minute every day at utc16:00-utc16:01, during which time the contract will automatically reject all rental demands.The EOS bank's smart contracts begin to self-audit all of the movements of the day, generating reports for manual review and analysis of the bank's business status.

### FAQ

- Where it APP download URL?
NO!we are automatic smart contract,no any app,you can use any EOS wallet to operate.
  
- Why do I need to rent the CPU instead of buying it?  
Most people are not every day need CPU resources, broke out in a short time of CPU demand will take up a lot of money, we offer 1 day / 3 days/1 week of short-term lease contract, under the assumption that World Cup coming and you need to send ads, then send a EOS will be provided to you 304.1 EOS of CPU resources and keep all day, you don't have to delegate 182.4992 EOS and wait for three day of undeledage.You can even get 1.8249 credits by sending just 0.01.
  
- Can I rent CPU resources to other accounts?  
Of course, if you put the account name in the MEMO, we will mortgage the resources on the account you wrote. Currently, only 12-bit accounts are supported.
  
- I'm done with it. Do I need to return anything?  
You don't need to do anything, and the smart contract automatically reclaims resources after the lease expires.
  
- How to rent the CPU more cost-effectively?  
The longer the lease, the lower the cost of the lease, obviously, the less it would cost to lease seven days a week.That's true in the hospitality industry, where it's obviously cheaper to book a room for a long time than to stay for just one day.Of course, if you don't have to lease for that long, a temporary lease is still more cost-effective when you do.If you are busy with business and have special requirements for resources, please refer to the chapter of this document "high-end financial services".
  
- why can't I save?The transfer failed.  
EOS bank adopts the industry-leading dynamic savings model. When the capital of EOS bank exceeds 50000.0000 EOS, it will automatically reject the customer's savings. No one can send EOS to the contract account.You will be able to send EOS storage, but please note that the amount you send does not make the EOS bank's capital pool larger than 50000.0000 EOS.

### Open source
  
- Contract hash：85167ac58f2853ab920c0349a9de33d38b740aa3b72ab736c37f86089df5476b
- lastest deploy Time:2018-08-13 11:40:55
- The contract operation process and functions of EOS bank are detailed and are already in the semi-open source mode. Just like all traditional Banks will not open the risk control model inside the bank, we will only submit the code to block. one for review.
- If you need detailed information, please click to view] (https://eospark.com/MainNet/contract/eosiocpubank) ABI interface contract.
- Waiting for the official contract review system of block. one, we will immediately submit the real-name system and code safety double review.

### Contact US
- EOSonic@outlook.com
- Wechat @ eosiobank/auoka-

---
![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/EOSBank.png)
