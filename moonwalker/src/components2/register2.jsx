import React from 'react';
import './register.css';
import img from "../assets/img/cod.jpg"



export const Register2 = () =>{   
    return(
        <div className="register"> 
            <img src={img} alt=""/> 
            <div className="form"> 
                <h1>COD Mobile :</h1>
                <h1>Rules & Regulations</h1> 
                <div className="inputBx"> 
                    <ol> <h4><b>General Rules</b></h4>
                        <li>By participating in our tournaments, all participants automatically agree that they vow to respect fellow participants and the MOBILE E-SPORTS® Staff.</li><br />
                        <li>The usage of "jailbroken" or "rooted" devices in tournament matches is not permitted.It is prohibited to spam or use offensive messages.</li><br />
                        <li>It is strictly prohibited to gamble or bet during an ongoing tournament. This rule applies to players or a team management that has any relations to a participating party. Such actions can give unfair advantage to close associates of teams that are playing.</li><br />
                        <li>During an on-going tournament, players are not allowed to change their in-game name. Clan Tags before in-game names are allowed to be changed.</li><br />
                        <li>Team members that are aware of a fellow hacker or cheater’s actions yet failed to come forth in reporting him will be banned from tournament.Only touch input is allowed to control the game in this tournament.</li><br />
                        <li>Ignorance of rules does not justify rule breaking. If you have questions about any rules, contact our support.</li><br />

                        <h4><b>Match Rules</b></h4>
                        <li>The usage of cheats, hacks, or any other third-party applications that give you an unfair advantage over your opponents will result in immediate disqualification.</li><br />
                        <li>Teams that attempt to use players which are not registered in their team may be disqualified.</li><br />
                        <li>All players must remain in the game’s lobby following the conclusion of each match. This allows us to view their final score on the scoreboard. Players that leave the lobby earlier and thus do not show up on the scoreboard may be suspended from on-going tournaments.</li><br />
                        <li>Once the match has started, only the players that are in the lobby are eligible to play. In the case of a player disconnecting and is not able to join back, a team is allowed to have a registered player on their team to substitute. This is allowed only once per match.</li><br />
                        <li>It is not allowed to switch to the spectator mode. If a player is caught using the spectator mode, that team will automatically have to forfeit the current round of that match.</li><br />
                        <li>Account sharing will be met with disqualification. Only the original owner of the Call of Duty: Mobile account may use it in tournaments.</li><br />
                        <li>Abusing in-game glitches that give a team an unfair advantage is not permitted. Teams caught doing so may be disqualified.</li><br />
                        <li>Depending on the settings for each individual tournament, more rules may apply for every match, such as banned items. If any special rules apply, then they may be found in the tournament’s registration article on this website.</li><br />
                        <li><b>Skins:</b> Weapon Variants and Purchased Weapons that alter the default iron sights and/or ANY weapon properties ( damage, speed, etc) are not allowed.</li><br />
                        <li>Operator Restrictions cover the following :</li>
                        <ul>
                            <li>Scorestreak restrictions: <b>None.</b></li>
                            <li>Weapon Restrictions: <b>None.</b></li>
                            <li>Perk Restrictions: <b>None.</b></li>
                            <li>Banned Weapon Perks (Gunsmith): <b>None.</b></li>
                            <li>Attachment Restrictions: <b>None.</b></li>
                            <li>Equipment Restrictions: <b>None.</b></li>
                        </ul>
                    </ol>
                </div> 
                <div className="btn">
                    <a href='#'>Register</a>
                </div> 
            </div>
        </div>
    );
}
