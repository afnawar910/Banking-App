import HeaderBox from '@/components/HeaderBox'

const Home = () => {

    const loggedIn = {firstName: 'Rasha'};
    return(
    <section className = "home"> 
    <div className = "home-content">
        <header className='home-header'>
            <HeaderBox
              type = "greeting"
              title= "Welcome"
              user = {loggedIn?.firstName ||"Guest"}
              subtext = "Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox  
            accounts = {[]} 
            totalBanks = {1}
            totalCurrentBalance = {1500.57}
            />
        </header>
    </div>
    Home </section>
    )

}

export default Home


