<script setup>
import { ref } from "vue";

import { useWebsiteStore } from "../../stores/websiteStore";

const websiteStore = useWebsiteStore();
</script>

<template>
  <!-- HERO -->
  <div
    class="h-screen flex flex-col justify-center items-center gap-10 p-5 bg-gradient-to-b from-gray-500 to-gray-300 text-white"
  >
    <h1 class="text-5xl font-bold text-center">Terms of Service</h1>

    <button
      @click="websiteStore.scrollToSection('terms-of-service')"
      class="active:animate-press bg-base-100 text-white rounded-full px-5 py-4 shadow-md"
    >
      <div class="flex flex-col items-center gap-1">
        <span> Read The Fine Print </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </button>
  </div>

  <div
    id="terms-of-service"
    class="bg-gray-300 flex flex-col items-center justify-center py-24"
  >
    <div
      class="container mx-auto p-10 bg-gray-50 rounded-xl flex flex-col gap-5 text-gray-600"
    >
      <div>
        <div class="text-sm md:text-base">
          THIS IS AN AGREEMENT BETWEEN YOU OR THE ENTITY THAT YOU REPRESENT
          (hereinafter “You” or “Your”) AND Skywave CRM (hereinafter “Skywave
          CRM”) GOVERNING YOUR USE OF Skywave CRM SUITE OF ONLINE BUSINESS
          PRODUCTIVITY AND COLLABORATION SOFTWARE.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Parts of this Agreement</div>

        <div class="text-sm md:text-base">
          This Agreement consists of the following terms and conditions
          (hereinafter the “General Terms”) and terms and conditions, if any,
          specific to use of individual Services (hereinafter the “Service
          Specific Terms”). The General Terms and Service Specific Terms are
          collectively referred to as the “Terms”. In the event of a conflict
          between the General Terms and Service Specific Terms, the Service
          Specific Terms shall prevail.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Acceptance of the Terms</div>

        <div class="text-sm md:text-base">
          You must be of legal age to enter into a binding agreement in order to
          accept the Terms. If you do not agree to the General Terms, do not use
          any of our Services. If you agree to the General Terms and do not
          agree to any Service Specific Terms, do not use the corresponding
          Service. You can accept the Terms by checking a checkbox or clicking
          on a button indicating your acceptance of the terms or by actually
          using the Services.
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Description of Service</div>

        <div class="text-sm md:text-base">
          We provide an array of services for online collaboration and
          management including word processor, spreadsheet, presentation tool,
          database application creator, email client, chat client, organizer,
          customer relationship management application and project management
          application (“Service” or “Services”). You may use the Services for
          your personal and business use or for internal business purpose in the
          organization that you represent. You may connect to the Services using
          any Internet browser supported by the Services. You are responsible
          for obtaining access to the Internet and the equipment necessary to
          use the Services. You can create and edit content with your user
          account and if you choose to do so, you can publish and share such
          content.
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Subscription to Beta Service</div>

        <div class="text-sm md:text-base">
          We may offer certain Services as closed or open beta services (“Beta
          Service” or “Beta Services”) for the purpose of testing and
          evaluation. You agree that we have the sole authority and discretion
          to determine the period of time for testing and evaluation of Beta
          Services. We will be the sole judge of the success of such testing and
          the decision, if any, to offer the Beta Services as commercial
          services. You will be under no obligation to acquire a subscription to
          use any paid Service as a result of your subscription to any Beta
          Service. We reserve the right to fully or partially discontinue, at
          any time and from time to time, temporarily or permanently, any of the
          Beta Services with or without notice to you. You agree that Skywave
          CRM will not be liable to you or to any third party for any harm
          related to, arising out of, or caused by the modification, suspension
          or discontinuance of any of the Beta Services for any reason.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Modification of Terms of Service</div>

        <div class="text-sm md:text-base">
          We may modify the Terms upon notice to you at any time through a
          service announcement or by sending email to your primary email
          address. If we make significant changes to the Terms that affect your
          rights, you will be provided with at least 30 days advance notice of
          the changes by email to your primary email address. You may terminate
          your use of the Services by providing Skywave CRM notice by email
          within 30 days of being notified of the availability of the modified
          Terms if the Terms are modified in a manner that substantially affects
          your rights in connection with use of the Services. In the event of
          such termination, you will be entitled to prorated refund of the
          unused portion of any prepaid fees. Your continued use of the Service
          after the effective date of any change to the Terms will be deemed to
          be your agreement to the modified Terms.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">User Sign up Obligations</div>

        <div class="text-sm md:text-base">
          You need to sign up for a user account by providing all required
          information in order to access or use the Services. If you represent
          an organization and wish to use the Services for corporate internal
          use, we recommend that you, and all other users from your
          organization, sign up for user accounts by providing your corporate
          contact information. In particular, we recommend that you use your
          corporate email address. You agree to: a) provide true, accurate,
          current and complete information about yourself as prompted by the
          sign up process; and b) maintain and promptly update the information
          provided during sign up to keep it true, accurate, current, and
          complete. If you provide any information that is untrue, inaccurate,
          outdated, or incomplete, or if Skywave CRM has reasonable grounds to
          suspect that such information is untrue, inaccurate, outdated, or
          incomplete, Skywave CRM may terminate your user account and refuse
          current or future use of any or all of the Services.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">
          Organization Accounts and Administrators
        </div>

        <div class="text-sm md:text-base">
          When you sign up for an account for your organization you may specify
          one or more administrators. The administrators will have the right to
          configure the Services based on your requirements and manage end users
          in your organization account. If your organization account is created
          and configured on your behalf by a third party, it is likely that such
          third party has assumed administrator role for your organization. Make
          sure that you enter into a suitable agreement with such third party
          specifying such party’s roles and restrictions as an administrator of
          your organization account.
        </div>
        <div class="text-sm md:text-base">
          You are responsible for i) ensuring confidentiality of your
          organization account password, ii) appointing competent individuals as
          administrators for managing your organization account, and iii)
          ensuring that all activities that occur in connection with your
          organization account comply with this Agreement. You understand that
          Skywave CRM is not responsible for account administration and internal
          management of the Services for you.
        </div>
        <div class="text-sm md:text-base">
          You are responsible for taking necessary steps for ensuring that your
          organization does not lose control of the administrator accounts. You
          may specify a process to be followed for recovering control in the
          event of such loss of control of the administrator accounts by sending
          an email to legal@skywave.app, provided that the process is acceptable
          to Skywave CRM. In the absence of any specified administrator account
          recovery process, Skywave CRM may provide control of an administrator
          account to an individual providing proof satisfactory to Skywave CRM
          demonstrating authorization to act on behalf of the organization. You
          agree not to hold Skywave CRM liable for the consequences of any
          action taken by Skywave CRM in good faith in this regard.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Personal Information and Privacy</div>

        <div class="text-sm md:text-base">
          Personal information you provide to Skywave CRM through the Service is
          governed by Skywave CRM Privacy Policy. Your election to use the
          Service indicates your acceptance of the terms of the Skywave CRM
          Privacy Policy. You are responsible for maintaining confidentiality of
          your username, password and other sensitive information. You are
          responsible for all activities that occur in your user account and you
          agree to inform us immediately of any unauthorized use of your user
          account by email to accounts@skywave.app or by calling us on any of
          the numbers listed on our website at skywave.app home page. We are not
          responsible for any loss or damage to you or to any third party
          incurred as a result of any unauthorized access and/or use of your
          user account, or otherwise.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Communications from Skywave CRM</div>

        <div class="text-sm md:text-base">
          The Service may include certain communications from Skywave CRM, such
          as service announcements, administrative messages and newsletters. You
          understand that these communications shall be considered part of using
          the Services. As part of our policy to provide you total privacy, we
          also provide you the option of opting out from receiving newsletters
          from us. However, you will not be able to opt-out from receiving
          service announcements and administrative messages.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Complaints</div>

        <div class="text-sm md:text-base">
          If we receive a complaint from any person against you with respect to
          your activities as part of use of the Services, we will forward the
          complaint to the primary email address of your user account. You must
          respond to the complainant directly within 10 days of receiving the
          complaint forwarded by us and copy Skywave CRM in the communication.
          If you do not respond to the complainant within 10 days from the date
          of our email to you, we may disclose your name and contact information
          to the complainant for enabling the complainant to take legal action
          against you. You understand that your failure to respond to the
          forwarded complaint within the 10 days’ time limit will be construed
          as your consent to disclosure of your name and contact information by
          Skywave CRM to the complainant.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Fees and Payments</div>

        <div class="text-sm md:text-base">
          The Services are available under subscription plans of various
          durations. Payments for subscription plans of duration of less than a
          year can be made only by Credit Card. Your subscription will be
          automatically renewed at the end of each subscription period unless
          you downgrade your paid subscription plan to a free plan or inform us
          that you do not wish to renew the subscription. At the time of
          automatic renewal, the subscription fee will be charged to the Credit
          Card last used by you. We provide you the option of changing the
          details if you would like the payment for the renewal to be made
          through a different Credit Card. If you do not wish to renew the
          subscription, you must inform us at least seven days prior to the
          renewal date. If you have not downgraded to a free plan and if you
          have not informed us that you do not wish to renew the subscription,
          you will be presumed to have authorized Skywave CRM to charge the
          subscription fee to the Credit Card last used by you.
        </div>
        <div class="text-sm md:text-base">
          From time to time, we may change the price of any Service or charge
          for use of Services that are currently available free of charge. Any
          increase in charges will not apply until the expiry of your then
          current billing cycle. You will not be charged for using any Service
          unless you have opted for a paid subscription plan.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Restrictions on Use</div>

        <div class="text-sm md:text-base">
          In addition to all other terms and conditions of this Agreement, you
          shall not: (i) transfer the Services or otherwise make it available to
          any third party; (ii) provide any service based on the Services
          without prior written permission; (iii) use the third party links to
          sites without agreeing to their website terms & conditions; (iv) post
          links to third party sites or use their logo, company name, etc.
          without their prior written permission; (v) publish any personal or
          confidential information belonging to any person or entity without
          obtaining consent from such person or entity; (vi) use the Services in
          any manner that could damage, disable, overburden, impair or harm any
          server, network, computer system, resource of Skywave CRM; (vii)
          violate any applicable local, state, national or international law;
          and (viii) create a false identity to mislead any person as to the
          identity or origin of any communication.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Spamming and Illegal Activities</div>

        <div class="text-sm md:text-base">
          You agree to be solely responsible for the contents of your
          transmissions through the Services. You agree not to use the Services
          for illegal purposes or for the transmission of material that is
          unlawful, defamatory, harassing, libelous, invasive of another’s
          privacy, abusive, threatening, harmful, vulgar, pornographic, obscene,
          or is otherwise objectionable, offends religious sentiments, promotes
          racism, contains viruses or malicious code, or that which infringes or
          may infringe intellectual property or other rights of another. You
          agree not to use the Services for the transmission of “junk mail”,
          “spam”, “chain letters”, “phishing” or unsolicited mass distribution
          of email. We reserve the right to terminate your access to the
          Services if there are reasonable grounds to believe that you have used
          the Services for any illegal or unauthorized activity.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Inactive User Accounts Policy</div>

        <div class="text-sm md:text-base">
          We reserve the right to terminate unpaid user accounts that are
          inactive for a continuous period of 120 days. In the event of such
          termination, all data associated with such user account will be
          deleted. We will provide you prior notice of such termination and
          option to back-up your data. The data deletion policy may be
          implemented with respect to any or all of the Services. Each Service
          will be considered an independent and separate service for the purpose
          of calculating the period of inactivity. In other words, activity in
          one of the Services is not sufficient to keep your user account in
          another Service active. In case of accounts with more than one user,
          if at least one of the users is active, the account will not be
          considered inactive.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Data Ownership</div>

        <div class="text-sm md:text-base">
          We respect your right to ownership of content created or stored by
          you. You own the content created or stored by you. Unless specifically
          permitted by you, your use of the Services does not grant Skywave CRM
          the license to use, reproduce, adapt, modify, publish or distribute
          the content created by you or stored in your user account for Skywave
          CRM’s commercial, marketing or any similar purpose. But you grant
          Skywave CRM permission to access, copy, distribute, store, transmit,
          reformat, publicly display and publicly perform the content of your
          user account solely as required for the purpose of providing the
          Services to you.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">User Generated Content</div>

        <div class="break-all">
          You may transmit or publish content created by you using any of the
          Services or otherwise. However, you shall be solely responsible for
          such content and the consequences of its transmission or publication.
          Any content made public will be publicly accessible through the
          internet and may be crawled and indexed by search engines. You are
          responsible for ensuring that you do not accidentally make any private
          content publicly available. Any content that you may receive from
          other users of the Services, is provided to you AS IS for your
          information and personal use only and you agree not to use, copy,
          reproduce, distribute, transmit, broadcast, display, sell, license or
          otherwise exploit such content for any purpose, without the express
          written consent of the person who owns the rights to such content. In
          the course of using any of the Services, if you come across any
          content with copyright notice(s) or any copy protection feature(s),
          you agree not to remove such copyright notice(s) or disable such copy
          protection feature(s) as the case may be. By making any
          copyrighted/copyrightable content available on any of the Services you
          affirm that you have the consent, authorization or permission, as the
          case may be from every person who may claim any rights in such content
          to make such content available in such manner. Further, by making any
          content available in the manner aforementioned, you expressly agree
          that Skywave CRM will have the right to block access to or remove such
          content made available by you if Skywave CRM receives complaints
          concerning any illegality or infringement of third party rights in
          such content. By using any of the Services and transmitting or
          publishing any content using such Service, you expressly consent to
          determination of questions of illegality or infringement of third
          party rights in such content by the agent designated by Skywave CRM
          for this purpose.
        </div>
        <div class="text-sm md:text-base">
          For procedure relating to complaints of illegality or infringement of
          third party rights in content transmitted or published using the
          Services, click here.
        </div>
        <div class="text-sm md:text-base">
          If you wish to protest any blocking or removal of content by Skywave
          CRM, you may do so in the manner provided here.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Sample files and Applications</div>

        <div class="text-sm md:text-base">
          Skywave CRM may provide sample files and applications for the purpose
          of demonstrating the possibility of using the Services effectively for
          specific purposes. The information contained in any such sample files
          and applications consists of random data. Skywave CRM makes no
          warranty, either express or implied, as to the accuracy, usefulness,
          completeness or reliability of the information or the sample files and
          applications.
        </div>
        <div class="font-bold">Trademark</div>
        <div class="text-sm md:text-base">
          Skywave CRM, Skywave CRM logo, the names of individual Services and
          their logos are trademarks of Skywave CRM. You agree not to display or
          use, in any manner, the Skywave CRM trademarks, without Skywave CRM’s
          prior permission.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Disclaimer of Warranties</div>

        <div class="text-sm md:text-base">
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT THE USE OF THE SERVICES IS AT
          YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN AS-IS-AND-AS-AVAILABLE
          BASIS. Skywave CRM EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
          WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
          WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          Skywave CRM MAKES NO WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED,
          TIMELY, SECURE, OR ERROR FREE. USE OF ANY MATERIAL DOWNLOADED OR
          OBTAINED THROUGH THE USE OF THE SERVICES SHALL BE AT YOUR OWN
          DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE
          TO YOUR COMPUTER SYSTEM, MOBILE TELEPHONE, WIRELESS DEVICE OR DATA
          THAT RESULTS FROM THE USE OF THE SERVICES OR THE DOWNLOAD OF ANY SUCH
          MATERIAL. NO ADVICE OR INFORMATION, WHETHER WRITTEN OR ORAL, OBTAINED
          BY YOU FROM Skywave CRM, ITS EMPLOYEES OR REPRESENTATIVES SHALL CREATE
          ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Limitation of Liability</div>

        <div class="text-sm md:text-base">
          YOU AGREE THAT Skywave CRM SHALL, IN NO EVENT, BE LIABLE FOR ANY
          CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL, PUNITIVE, OR OTHER LOSS
          OR DAMAGE WHATSOEVER OR FOR LOSS OF BUSINESS PROFITS, BUSINESS
          INTERRUPTION, COMPUTER FAILURE, LOSS OF BUSINESS INFORMATION, OR OTHER
          LOSS ARISING OUT OF OR CAUSED BY YOUR USE OF OR INABILITY TO USE THE
          SERVICE, EVEN IF Skywave CRM HAS BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGE. IN NO EVENT SHALL Skywave CRM’S ENTIRE LIABILITY TO YOU
          IN RESPECT OF ANY SERVICE, WHETHER DIRECT OR INDIRECT, EXCEED THE FEES
          PAID BY YOU TOWARDS SUCH SERVICE.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Indemnification</div>

        <div class="text-sm md:text-base">
          You agree to indemnify and hold harmless Skywave CRM, its officers,
          directors, employees, suppliers, and affiliates, from and against any
          losses, damages, fines and expenses (including attorney’s fees and
          costs) arising out of or relating to any claims that you have used the
          Services in violation of another party’s rights, in violation of any
          law, in violations of any provisions of the Terms, or any other claim
          related to your use of the Services, except where such use is
          authorized by Skywave CRM.
        </div>
        <div class="font-bold">Arbitration</div>
        <div class="text-sm md:text-base">
          Any controversy or claim arising out of or relating to the Terms shall
          be settled by binding arbitration in accordance with the commercial
          arbitration rules of the American Arbitration Association. Any such
          controversy or claim shall be arbitrated on an individual basis, and
          shall not be consolidated in any arbitration with any claim or
          controversy of any other party. The decision of the arbitrator shall
          be final and unappealable. The arbitration shall be conducted in
          California and judgment on the arbitration award may be entered into
          any court having jurisdiction thereof. Notwithstanding anything to the
          contrary, Skywave CRM may at any time seek injunctions or other forms
          of equitable relief from any court of competent jurisdiction.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Suspension and Termination</div>

        <div class="text-sm md:text-base">
          We may suspend your user account or temporarily disable access to
          whole or part of any Service in the event of any suspected illegal
          activity, extended periods of inactivity or requests by law
          enforcement or other government agencies. Objections to suspension or
          disabling of user accounts should be made to legal@skywave.app within
          thirty days of being notified about the suspension. We may terminate a
          suspended or disabled user account after thirty days. We will also
          terminate your user account on your request.
        </div>
        <div class="text-sm md:text-base">
          In addition, we reserve the right to terminate your user account and
          deny the Services upon reasonable belief that you have violated the
          Terms and to terminate your access to any Beta Service in case of
          unexpected technical issues or discontinuation of the Beta Service.
          You have the right to terminate your user account if Skywave CRM
          breaches its obligations under these Terms and in such event, you will
          be entitled to prorated refund of any prepaid fees. Termination of
          user account will include denial of access to all Services, deletion
          of information in your user account such as your email address and
          password and deletion of all data in your user account.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">END OF TERMS OF SERVICE</div>

        <div class="text-sm md:text-base">
          If you have any questions or concerns regarding this Agreement, please
          contact us at legal@skywave.app.
        </div>
      </div>
    </div>
  </div>
</template>
