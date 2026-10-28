import { useEffect } from 'react';

const EMAIL = 'support@proparagonsoftware.com';

export const PRIVACY_TITLE = 'Blockcade Privacy Policy';
export const PRIVACY_DESCRIPTION =
  'How Blockcade, a puzzle game by Pro Paragon Software LLC, handles your information.';

export default function BlockcadePrivacy() {
  useEffect(() => {
    document.title = PRIVACY_TITLE;
    return () => {
      document.title = 'Pro Paragon Software';
    };
  }, []);

  return (
    <div className="policy">
      <h1>Blockcade Privacy Policy</h1>
      <p className="meta">Pro Paragon Software LLC &middot; Effective 28-OCT-2026</p>

      <div className="summary">
        <strong>The short version</strong>
        <ul>
          <li>We don't ask for your name, email or any account of our own, and we don't run servers that store information about you.</li>
          <li>Your progress is saved on your device and, if you sign in, in your own Google Play Games account (Android) or Apple Game Center account (iOS).</li>
          <li>Blockcade shows ads through Google AdMob. Google may use your device's advertising ID and similar information to show and measure those ads, and where the law requires it we ask for your consent first.</li>
          <li>If the game crashes, a crash report goes to Google Firebase Crashlytics so we can fix it. It does not include your name, account or player ID.</li>
          <li>Blockcade is not directed at children under 13.</li>
        </ul>
      </div>

      <h2>1. Who we are</h2>
      <p>Blockcade is a puzzle game made by Pro Paragon Software LLC ("we", "us"). This policy explains what information the game uses, why, who it is shared with, and the choices you have. It applies to the Blockcade app on Android and iOS.</p>
      <p>Contact: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>

      <h2>2. Information at a glance</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>What</th><th>Why</th><th>Where it goes</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Game progress, scores, items and settings</td>
              <td>To save your game</td>
              <td>Stored on your device. If you sign in, a copy is kept in your Google account (Google Play Games) or Apple account (Game Center)</td>
            </tr>
            <tr>
              <td>Google Play Games or Game Center player ID</td>
              <td>To sign you in and sync your saved game across devices</td>
              <td>Google (Play Games Services) on Android; Apple (Game Center) on iOS</td>
            </tr>
            <tr>
              <td>Advertising ID, device and app information, IP address, and how you interact with ads</td>
              <td>To show, limit the frequency of, and measure ads, and to prevent fraud</td>
              <td>Google (AdMob) and the advertising partners Google works with</td>
            </tr>
            <tr>
              <td>Crash reports: what went wrong, device model, operating system and app version, and a random installation ID</td>
              <td>To find and fix crashes and errors</td>
              <td>Google (Firebase Crashlytics). Not linked to your account or player ID</td>
            </tr>
            <tr>
              <td>Your consent choices (where applicable)</td>
              <td>To remember whether ads may be personalized</td>
              <td>Stored on your device by Google's consent tool and, on iOS, by your device's tracking setting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Information stored on your device</h2>
      <p>Blockcade saves your level progress, best times and scores, the items you have, your recent level attempts, and your sound, music and haptics settings on your device. It also keeps a few counters that pace ads, such as when an ad was last shown. This information stays on your device unless you sign in to Google Play Games or Game Center (see below). Uninstalling the game removes it.</p>

      <h2>4. Sign-in and cloud save</h2>
      <h3>Google Play Games (Android)</h3>
      <p>On Android, Blockcade can sign you in to Google Play Games Services so your progress follows you between devices. When you are signed in, Google provides us with your Play Games player ID, and your saved game (the progress, items and settings described above) is stored in the Saved Games area of your own Google account. We do not receive your name, email address or contacts.</p>
      <p>Google's handling of this information is covered by the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. You can review or delete Play Games data from your Google account and the Google Play Games settings on your device.</p>
      <h3>Game Center (iOS)</h3>
      <p>On iOS, Blockcade uses Apple Game Center for the same purpose. If you are signed in to Game Center on your device, Apple provides us with a Game Center player ID, and your saved game is stored with your Apple account through Game Center's saved games, which use iCloud. We do not receive your Apple Account email address or contacts.</p>
      <p>Apple's handling of this information is covered by the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>. You can sign out of Game Center in <em>Settings &rarr; Game Center</em>, and manage the iCloud data apps store for you in <em>Settings &rarr; [your name] &rarr; iCloud</em>.</p>

      <h2>5. Advertising (Google AdMob)</h2>
      <p>Blockcade is free and supported by ads, provided by Google AdMob. There are two kinds:</p>
      <ul>
        <li><strong>Occasional full-screen ads</strong> between levels.</li>
        <li><strong>Optional rewarded ads</strong> you can choose to watch to get more of an item you have run out of.</li>
      </ul>
      <p>To serve these ads, the Google Mobile Ads SDK in the app collects and shares with Google your device's advertising ID, information about your device and the app (such as model, operating system and language), your IP address (which can indicate your approximate location), and information about your interaction with ads (such as views and taps). Google and its advertising partners use this to show ads, cap how often you see them, measure their performance, and detect fraud and abuse. Where you have consented, or where consent is not required, ads may be personalized based on your interests.</p>
      <p>Learn more about <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from apps that use its services</a> and about <a href="https://policies.google.com/technologies/ads">Google's advertising</a>.</p>
      <p>We set the ads in Blockcade to a maximum content rating suitable for a general audience, and we block several sensitive ad categories.</p>

      <h2>6. Crash reports (Firebase Crashlytics)</h2>
      <p>Blockcade uses Google Firebase Crashlytics to learn when the game crashes or hits an error, so we can fix it. A report includes what went wrong (such as the error and where in the game's code it happened), your device model, operating system and app version, a short log of what the game was doing just before (such as which level was loaded or whether an ad was on screen), and a random installation ID that Firebase creates for the app on your device. We do not attach your name, your Google Play Games or Game Center player ID, or any other account information to these reports, and we do not use them for advertising.</p>
      <p>Firebase's handling of this information is described in <a href="https://firebase.google.com/support/privacy">Privacy and Security in Firebase</a>. Crash reports are kept for up to 90 days.</p>

      <h2>7. Your choices and consent</h2>
      <h3>European Economic Area, UK and Switzerland</h3>
      <p>If you are in these regions, Blockcade asks for your consent through Google's consent tool before ads can be personalized. You can change your choice at any time in the game under <strong>Settings &rarr; Ad Privacy &rarr; Edit</strong>. If you decline, you will still see ads, but they will not be personalized.</p>
      <h3>United States</h3>
      <p>Depending on your state, you may have the right to opt out of the sale or sharing of personal information for targeted advertising. Where this applies, Google's consent tool presents that choice in the game.</p>
      <h3>iOS: App Tracking Transparency</h3>
      <p>On iOS, the first time the game starts, Apple's prompt asks whether Blockcade may track your activity across other companies' apps and websites. If you allow it, your device's advertising identifier (IDFA) can be used to personalize ads. If you choose <strong>Ask App Not to Track</strong>, the identifier is not shared and you will still see ads, but they will not be personalized. You can change this at any time in <em>Settings &rarr; Privacy &amp; Security &rarr; Tracking</em>.</p>
      <h3>Everyone</h3>
      <ul>
        <li><strong>Reset or delete your advertising ID</strong>, or opt out of ad personalization, in your device's settings (on Android, usually <em>Settings &rarr; Google &rarr; Ads</em> or <em>Settings &rarr; Privacy &rarr; Ads</em>; on iOS, <em>Settings &rarr; Privacy &amp; Security &rarr; Tracking</em>).</li>
        <li><strong>Don't sign in to Google Play Games or Game Center</strong> if you prefer your progress to stay only on your device.</li>
        <li><strong>Uninstall the game</strong> to remove the information stored on your device.</li>
      </ul>

      <h2>8. Children</h2>
      <p>Blockcade is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided personal information through the game, contact us and we will help remove it.</p>

      <h2>9. What we don't collect</h2>
      <p>Blockcade does not ask you to create an account with us, and does not collect your name, email address, phone number, contacts, photos or precise location. It does not currently offer in-app purchases. If we add purchases in the future, payments will be handled by Google Play or the App Store, and we will update this policy.</p>

      <h2>10. Keeping and deleting information</h2>
      <p>Information on your device is kept until you uninstall the game. Your cloud save is kept in your Google account or Apple account until you delete it through Google or Apple. Crash reports are kept in Firebase for up to 90 days. Information collected by Google for advertising is kept according to Google's own policies. Because we do not run servers that store information about you, we generally have no copy to delete; if you have a request, contact us and we will help you with it or direct you to Google or Apple.</p>

      <h2>11. Your rights</h2>
      <p>Depending on where you live, you may have rights to access, correct, delete or limit the use of your personal information, and to object to or withdraw consent for certain processing. To exercise them, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. You can also exercise many of these rights directly with Google through your Google account, or with Apple through your Apple Account.</p>

      <h2>12. Security and international transfers</h2>
      <p>Information stored with Google (including Firebase) or Apple is protected by their security measures. They may process information in the United States and other countries where they or their partners operate, under the safeguards described in their policies.</p>

      <h2>13. Changes to this policy</h2>
      <p>We will update this page if the game's handling of information changes, and change the effective date above. Significant changes will also be noted in the game's store listing or release notes.</p>

      <h2>14. Contact</h2>
      <p>Pro Paragon Software LLC<br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </div>
  );
}
