const Events = () => (
  <div>
    <h1>2026 Game Jam</h1>
    <h2>Monday, May 11th 2026 – Friday May 15th 2026</h2>
    <p>Theme Reveal: Monday, May 11th 12:00pm CST</p>
    <p>Submissions Close: Friday May 15th 5:00pm CST</p>
    <br></br>
    <p>
      <b>Open to students, staff, and community members!</b>
    </p>
    <p>
      Announcements and updates will be made via the STC Game Dev Org Discord.
    </p>
    <p>
      Message @samuraiofprogramming or{"  "}
      <a href="mailto:andrew.honey@soutehasttech.edu">
        andrew.honey@southeasttech.edu
      </a>{" "}
      to verify and get access to channels
    </p>
    <h3>Rules:</h3>
    <ul style={{ width: "50%", margin: "auto", textAlign: "left" }}>
      <li>
        Game content must follow the same content rules as Twitch:
        <ul>
          <li>
            <a href="https://safety.twitch.tv/s/article/Community-Guidelines?language=en_US#19SensitiveContent">
              Twitch Content Guidelines
            </a>
          </li>
        </ul>
      </li>
      <li>
        Students must also follow STC Policies and Student Conduct:
        <ul>
          <li>
            <a href="https://www.southeasttech.edu/consumer-information/stc-policies.php">
              STC Policies and Student Conduct
            </a>
          </li>
        </ul>
      </li>
      <li>
        Participants must register using the following sign-up form:
        <ul>
          <li>
            <a href="https://forms.office.com/r/qRkdTeTB8F">Sign Up Here</a>
          </li>
          <li>(Don't worry, it's short)</li>
        </ul>
      </li>
      <li>
        Participants must notimpersonate or otherwise misrepresent real world
        entities without theirconsent.
      </li>
      <li>
        Games must run on 16 GB of RAM or less, and 2.00GHz processor or lesser.
        <ul>
          <li>These are the minimum specs for the school laptops.</li>
          <li>Web hosted games are encouraged, but not required.</li>
        </ul>
      </li>
    </ul>
    <br></br>
    <p>
      Questions? Contact{" "}
      <a href="mailto:andrew.honey@soutehasttech.edu">
        andrew.honey@southeasttech.edu
      </a>
    </p>
    <br></br>
    <a href={`${import.meta.env.BASE_URL}stcGameJam.ics`} target="_blank">
      Need a calendar reminder?
    </a>
  </div>
);

export default Events;
