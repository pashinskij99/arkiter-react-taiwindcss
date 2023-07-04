import styles from '../PrivacyPolicyPage/PrivacyPolicyPage.module.scss'
import NavBarPrivacy from "../../Components/Landing Page/NavBarPrivacy";
import clsx from 'clsx'

const CookiePolicyPage = () => {
    return (
        <>
            <NavBarPrivacy />

            <main className={styles.privacyPolicyWrapper}>
                <div className="container text-[3rem]"  >
                    <section>
                        <h1>Cookie policy</h1>
                        <p>
                            We last updated our policy on 22 March 2023
                            <br/>
                            We use cookies on our website. You’ll find a notice about this on our homepage as well, which also links back to this policy.
                        </p>

                        <h2>Information about cookies</h2>
                        <p>
                            A cookie is a small text file that is placed onto your computer (or other electronic device) when you access our website.
                            <br/>
                            There are 4 different types of cookies:
                        </p>
                        <ol className={styles.listWithWords}>
                            <li>
                                <p>a.</p>
                                Strictly-necessary cookies (required for the website to run). These allow you to do things like log in securely.
                            </li>
                            <li>
                                <p>b.</p>
                                Performance cookies (which measure how many visitors use our site, which pages they visit and how they interact with the site). These help us to improve our website.

                            </li>
                            <li>
                                <p>c.</p>
                                Functionality cookies (which remember specific visitor’s preferences for the way they use our site, e.g. language settings or font size).
                            </li>
                            <li>
                                <p>d.</p>
                                Targeting/advertising cookies (these collect information about individual visitors that enable us, or third parties, to provide relevant advertisements to those who have visited our site)
                            </li>
                        </ol>
                        <p>Our website may use each type of cookie in order to:</p>
                        <ol className={styles.listWithWords}>
                            <li>
                                <p>a.</p>
                                Make your online experience more efficient and enjoyable
                            </li>
                            <li>
                                <p>b.</p>
                                Improve our services
                            </li>
                            <li>
                                <p>c.</p>
                                Recognise you whenever you visit this website and distinguish you from other users of our site
                            </li>
                            <li>
                                <p>d.</p>
                                Obtain information about your preferences and use of our site
                            </li>
                            <li>
                                <p>e.</p>
                                Provide you with advertising that is tailored to your interests
                            </li>
                            <li>
                                <p>f.</p>
                                Carry out research and data analysis to help us to improve our content and services and to better understand our customer preferences and interests
                            </li>
                        </ol>

                        <p>
                            Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about you.
                            <br/>
                            We have set out specific details of the cookies we use on our site in section 4 below.
                        </p>
                    </section>
                    <section>
                        <h2>Third-party cookies</h2>
                        <p>
                            Like many other websites, third parties may also set cookies on our website. These third parties are responsible for the cookies they set on our site and we have no control over them. For further information on how their cookies policies work, please visit their websites.
                        </p>
                        <h2>Managing cookies</h2>
                        <p>
                            You can manage cookies yourself.
                            <br/>
                            You can set your web browser to refuse cookies, delete cookies, or to alert you when cookies are being sent.
                            <br/>
                            You will need to visit the web browser’s site to manage, but for ease we have provided links to popular browsers below:
                        </p>

                        <ol className={styles.listWithDotsLink}>
                            <li>
                                Google Chrome:
                                <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en">https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en</a>
                            </li>
                            <li>
                                Microsoft Firefox:
                                <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a>
                            </li>
                            <li>
                                Microsoft Internet Explorer:
                                <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies</a>
                            </li>
                            <li>
                                Apple Safari:
                                <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/">https://support.apple.com/en-gb/guide/safari/sfri11471/</a>
                            </li>
                        </ol>

                        <p>
                            For further information about cookies and how to manage or disable them please go to: <a
                            href="https://aboutcookies.org/">aboutcookies.org</a>
                            <br/>
                            Please also note that if you change/block cookies then:
                        </p>
                        <ol className={styles.listWithDots}>
                            <li>
                                some parts of our website may not function properly or as well as they otherwise might;
                            </li>
                            <li>
                                changes will apply across all websites that you visit (unless you choose to block cookies only from particular websites); and
                            </li>
                            <li>
                                the settlings that you change will only apply on the device on which you change the settings and will not apply across all other devices that you use.
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h2>Specific details</h2>
                        <p>
                            We have set out in the table below details of each of the cookies on our site, a description of what they do and, where relevant, external links that provide more information about them:
                        </p>

                        <div className={styles.scrollContainer}>
                            <table className={clsx(styles.table, styles.scroll)}>
                                <thead>
                                <tr>
                                    <td>Cookie Name</td>
                                    <td>Description</td>
                                    <td>External Information (if relevant)</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="tdBorder">Google Analytics</td>
                                    <td className="tdBorder">We use Google Analytics to analyse the use of this website. Google Analytics generates statistical and other information about website use by means of cookies, which are stored on users' computers. The information generated relating to our website is used to create reports about the use of the website. Google will store this information.</td>
                                    <td className="tdBorder">Google's privacy policy is available at: <a href="http://www.google.com/privacypolicy.html">http://www.google.com/privacypolicy.html</a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default CookiePolicyPage;