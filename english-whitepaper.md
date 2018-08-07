![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/banner.png)
 
   
## EOS Bank
![Bank Stutas](https://github.com/eosonic/EOSBank/blob/master/image/open.png) 

EOS bank is the infrastructure of EOS blockchain, which allows DApp developers to pay minimal interest on a large amount of CPU resources that will be paid to all of the bank's depositors, and these lease transactions are executed through smart contracts.

### Demand analysis
With the development of EOS ecology, EOS CPU resources will become more and more expensive, and the CPU needs of many developers are not sustainable, and a lot of CPU needs will be exploded in a short time.In response to the massive CPU resources needed for a short-term promotion during the World Cup/Christmas, the EOS bank serves as the infrastructure for the EOS blockchain to provide short-term, rapid rental of CPU resources.

### How to used
  
Use any EOS wallet app, to the account of the contract: eosiocpubank sent alittle EOS, multiple CPU please see the next section of the current lease price, number will be automatically calculated for you the lease contract, and the delegate EOS you get CPU resources, 0.5 seconds after the delegate to the account, you can even write other account name in MEMO, we will write to you this account provides leasing, don't write the default account name lease give yourself.
  
The amount of EOS transferred determines the amount of CPU delegate. For example, the transfer of 0.05 EOS will immediately delegate 15.283CPU resources for you. The MEMO can be written to the lease time you need.
  
MEMO: "3d/7d" will automatically delegate you for 3 days /7 days. Below is the transfer using wallet, which will immediately get 15.283EOS CPU resources for 3 days. 
  
![rent](https://github.com/eosonic/EOSBank/blob/master/image/rent.png)
  
Use command line mode:
  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" ""       
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "3d"      
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "7d" 

If you need to rent CPU for other accounts, please write the account name in the remarks:
  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "youraccount"  
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "3d youraccount"      
> cleos transfer youraccount **eosiocpubank** "0.1 EOS" "7d youraccount" 
  
Caution: due to the large number of SPAM sending 0.0001 EOS on EOS blockchain, the lowest rental supported by EOS bank currently sends 0.01 EOS. We recommend sending 0.05, enabling you to get 15.283 CPU resources for EOS.

### Current lease price

sent | get CPU | duration | 
------------ | -------------|-------------
0.1 EOS | 30.4166 EOS CPU | 24 Hours  | 
0.1 EOS | 24.3333 EOS CPU | 3 days | 
0.1 EOS | 18.2500 EOS CPU | 1 week | 

### Dynamic savings model

EOS bank contract eosiocpubank supports saving your EOS currency to the bank, whenever there is any lease transaction, we will immediately dividends to each savings account.

In order to keep the rate of return of savings stable, we limited the size of the savings pool. When the unstaked of the contract eosiocpubank is less than 5000.0000 EOS, the contract will automatically open the deposit, which is regarded as the bank's lack of funds needs to be supplemented. You can transfer more than 10 EOS to the contract, and write "deposit" in the MEMO (no double quotation marks).This will be recorded as a deposit.

In contrast, whenever the unstaked account of the contract eosiocpubank is larger than 5000.0000 EOS, the contract automatically closes the deposit , you will be unable to send the EOS to the bank, and any transfer that includes deposit in the remarks will be automatically rejected by the system.

This keeps the Banks' savings pools at the right size to prevent yields on all savers from falling because of excess deposits.

### How to saving

Use any EOS wallet to sent to contract account: **eosiocpubank** transfer more than 10 EOS, must be less than 1000 EOS, MEMO deposit, support any deposit sent, they will be recorded under your account.
  
Deposit is not supported for other accounts. The MEMO can only be written into deposit. Please refer to the previous chapter.wait for bank savings to be reduced before operating savings.

In the previous chapter, if the EOS bank's saving pool is full(more than 5000EOS), it will be unable to accept savings, and the smart contract will automatically refuse customer deposits.Please wait for bank savings to be reduced before operating savings.
  
  ![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/deposit2.png)


### Dividend settlement model

The interest received by the completion of A leasing transaction is L, and we will take a snapshot of the current savings assets, set the total balance of platform savings as N, and A customer savings as A, then the customer will get A/NL interest dividend immediately according to the amount of savings A.

Your total interest income is affected by the dynamic rental rate. Let's say the platform has 10,000 EOS , you save 5,000, and when we rent out 7,500, you get 22.5% real interest, that is, set the interest rate **multiply** the rental rate is equal to the real interest rate.
Actual calculation demonstration:

We received A lease request of 10 COINS. At present, the computing platform unstaked was 5000 EOS, and the customer stored 100 EOS on the platform. Then A/NL=100 savings /5000 total amount X10 interest =0.2EOS.This snapshot dividend has nothing to do with rental rates.

### 查询你的储蓄和分红

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
  
>cleos get table **eosiocpubank** 你的账号 refunds  

If you don't have an EOS software or a delivery tool for the Cleos command, perform the following steps to query your withdrawal;
  
If you don't have an EOS software or a delivery tool for the Cleos command, perform the following steps to query your deposits;
1. Open the API query website: http://apirequest.io/
2. Select post, type https://api.eosnewyork.io/v1/chain/get_table_rows in the URL column
3. in the Request Body,input：{"json":"true","code":"eosiocpubank","scope":"youraccount","table":"refunds"}
4. click Send One
5. After waiting for a few seconds,request_time will show how long it will be before your withdrawal reaches your account.This is a UNIX time.

### 解除提现申请

如果你在提现命令发送后的72小时内想要取消你的提现，请使用任意EOS钱包发送0.0002个EOS币到柚资银行eosiocpubank即可取消你的提现请求，注意，请勿写入任何备注MEMO，你也可以使用命令行来取消提现命令，这是立即生效的，你将会立即参与下一次租单的分红并获得收益。

> cleos transfer 你的账号 **eosiocpubank** "0.0002 EOS" ""      

### 柚资银行优势

- #### 强大的资本充足率
柚资银行拥有充足的固定资本，同时吸收EOS小额储蓄，我们支持客户以大于10个EOS的数量储蓄自己的EOS币，我们会把利息收入返还给储蓄者。多样的资金来源，强大的资本保证，充分保障快速变化的租赁需求。

- #### 全自动执行租赁订单
采用智能合约响应租赁请求，任何人可以发送EOS币到合约账户**eosiocpubank**，系统按照当前价格立即租赁CPU给发送的客户。

- #### 先进的租赁周期算法
同时满足客户的临时性资源需求和长周期资源租赁需求，智能合约按照需求的周期自动报价。

- #### 全自动动态高流动性资产委托池
全自动的资金池控制模型，全自动的快速委托秒级抵押和反抵押，如此快速的业务模型使得合约的运行非常繁忙，一系列动态的金融模型，使得柚资银行储蓄资本会拥有极高的周转率，同时收益率达到最高状态的同时租赁价格反而很低。这将给储蓄者带来高额回报，同样也降低了使用者的价格。

- #### 实名制的合约开发者
为了保持资金安全，对于大型储户，我们使用了账号权限隔离机制，合约eosiocpubank不拥有transfer EOS币的权限，这从根本上杜绝了大资金的被盗，同时，我们公开了团队开发者的身份信息以供查询。

### 高端金融服务
  
如果您是EOS游戏深度玩家，或者你是量化操作机器人，时间不允许你频繁查询自己的资源状态，或者您的业务需要全天候可用，柚资银行提供高端定制服务，我们将会监控你的EOS账号，每当资源使用率超过95%，我们将会为你自动抵押CPU，使你处于“战神状态”，同样，当你业务下降之后，我们检测到你的资源使用率小于85%我们将会为你解除部分抵押，这种动态的抵押和反抵押操作使你提高租赁效率，大量节省了你的查询时间和抵押成本。请翻阅本文的最后一章，联系我们，将为你设计最佳的自动租赁模型。

### 银行打烊时间 
就像传统银行需要结算一样，柚资银行在每天的UTC16:00-UTC16:01将会打烊一分钟时间，在这个打烊的时间段内，合约会自动拒绝所有租赁需求。柚资银行的智能合约开始自我审查这一天的所有动作，生成报表以供人工审核分析银行的业务状态。

### 常见问题  
- 为什么我需要租赁CPU而不是购买？   
大部分人并不是每天都需要CPU资源，在短时间内爆发出的CPU需求将会占用大量资金，我们提供1天/3天/1周的短期租赁合约，假设世界杯来临而你需要发送广告，那么发送1个EOS币将会给你提供304.1个币的CPU资源并维持一整天，你无须抵押304.1个EOS并且等待长达3天的赎回期。你甚至可以仅仅发送0.01个币而获得3.041个币的计算资源。
  
- 我可以给其他账号租赁CPU资源吗？  
当然可以，如果你在MEMO备注里写入账号名称，我们将会把资源抵押在你写的这个账号上，目前仅仅支持12位长度的账号。

- 我使用完毕了，我需要归还什么吗？  
你不需要任何操作，智能合约会在租赁到期后自动收回资源。
    
- 如何更划算的租赁CPU？  
租赁周期越长租赁花费越低，很显然，租赁一周要比租赁7个1天的花费少得多。这在酒店业都是如此，长期订房显然比只住一天要便宜的多。当然，如果你不需要租赁那么久，依然是需要用的时候临时租赁更加划算。如果你业务繁忙对资源有特殊要求，请参阅本文档《高端金融服务》一章。

- 为什么我无法存款？转账失败了。
柚资银行采用业内领先的动态储蓄模型，当柚资银行的资本超过5000.0000EOS之后，柚资银行自动拒绝客户储蓄，任何人无法发送EOS币到合约账户，反之当银行资金池小于5000.0000的时候，储蓄合约自动开启。你将可以发送EOS存储，但请注意，你发送的数量无法使柚资银行的资金池大于5000.0000.
  	
### 开源方式 
- 合约hash：6d5b1df36c76446542689e6f8c6b956373326961c09232149dbd3710abeed6cb
- 柚资银行的合约操作流程和功能已尽详，已属于半开源模式，就像所有的传统银行不会放开参观银行内部的风控模型一样，我们仅会将代码提交Block.one审阅。
- 如需详细资料，[请点击查看](https://eospark.com/MainNet/contract/eosiocpubank)合约ABI接口。 
- 等待Block.one官方合约审查系统, 我们将立即提交实名制和代码安全双重审查。 

### 联系方式  
- EOSonic@outlook.com 
- Wechat@eosiobank/auoka-

#### 柚资银行是虎符钱包旗下DApp 详情参阅https://hoo.com/

---
![EOSBank](https://github.com/eosonic/EOSBank/blob/master/image/EOSBank.png)
