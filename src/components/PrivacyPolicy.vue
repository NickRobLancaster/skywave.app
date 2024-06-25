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
    <h1 class="text-5xl font-bold">Privacy Policy</h1>

    <button
      @click="websiteStore.scrollToSection('privacy-policy')"
      class="active:animate-press bg-base-100 text-white rounded-full px-5 py-4 shadow-md"
    >
      <div class="flex flex-col items-center gap-1">
        <span> Read The Fine Print </span>
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </button>
  </div>

  <div
    id="privacy-policy"
    class="bg-gray-300 flex flex-col items-center justify-center py-24"
  >
    <div
      class="container mx-auto p-10 bg-gray-50 rounded-xl flex flex-col gap-5 text-gray-600"
    >
      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">General</div>

        <div class="text-sm md:text-base">
          At Skywave CRM, we respect your need for online privacy and protect
          any Personal Information that you may share with us, in an appropriate
          manner. Our practice with respect to use of your Personal Information
          is as set forth below in this Privacy Policy Statement. As a condition
          to use of Skywave CRM Services, you consent to the terms of the
          Privacy Policy Statement as it may be updated from time to time. This
          Privacy Policy Statement applies exclusively to www.skywave.app.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">
          Children’s Online Privacy Protection
        </div>

        <div class="text-sm md:text-base">
          Skywave CRM does not knowingly collect Personal Information from users
          who are under 13 years of age.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Information Recorded and Use:</div>

        <div class="font-bold">Personal Information</div>
        <div class="text-sm md:text-base">
          During the Registration Process for creating a user account, we
          request Company Name, Company Address, Company Contact information and
          an email address. You will also be asked to choose a unique username
          and a password, which will be used solely for the purpose of providing
          access to your user account. Upon registration you will have the
          option of choosing a security question and an answer to the security
          question, which if given, will be used solely for the purpose of
          resetting your password. Your name and email address will be used to
          inform you regarding new services, releases, upcoming events and
          changes in this Privacy Policy Statement.
        </div>
        <div class="text-sm md:text-base">
          Skywave CRM will have access to third party personal information
          provided by you as part of using Skywave CRM Services such as contacts
          in your Skywave CRM Mail account. This information may include third
          party names, email addresses, phone numbers and physical addresses and
          will be used for servicing your requirements as expressed by you to
          Skywave CRM and solely as part and parcel of your use of Skywave CRM
          Services. We do not share this third party personal information with
          anyone for promotional purposes, nor do we utilize it for any purposes
          not expressly consented to by you. When you elect to refer friends to
          the website, we request their email address and name to facilitate the
          request and deliver a one time email. Your friend may contact us at
          support@skywave.app to request that we remove this information from
          our database.
        </div>
        <div class="text-sm md:text-base">
          We post user testimonials on our website. These testimonials may
          include names and other Personal Information and we acquire permission
          from our users prior to posting these on our website. Skywave CRM is
          not responsible for the Personal Information users elect to post
          within their testimonials.
        </div>

        <div class="font-bold">Usage Details</div>

        <div class="text-sm md:text-base">
          Your usage details such as time, frequency, duration and pattern of
          use, features used and the amount of storage used will be recorded by
          us in order to enhance your experience of the Skywave CRM Services and
          to help us provide you the best possible service.
        </div>
        <div class="font-bold">Contents of your User Account</div>

        <div class="text-sm md:text-base">
          We store and maintain files, documents, to-do lists, emails and other
          data stored in your user account at our facilities in the United
          States. In order to prevent loss of data due to errors or system
          failures, we also keep backup copies of data including the contents of
          your user account. Hence
        </div>
        <div class="text-sm md:text-base">
          your files and data may remain on our servers even after deletion or
          termination of your user account. We may retain and use your Personal
          Information and data as necessary to comply with our legal
          obligations, resolve disputes, and enforce our rights. We assure you
          that the contents of your user account will not be disclosed to anyone
          and will not be accessible even to employees of Skywave CRM except in
          circumstances specifically mentioned in this Privacy Policy Statement
          and Terms of Services. We also do not scan the contents of your user
          account for serving targeted advertisements.
        </div>

        <div class="font-bold">Payment Information</div>

        <div class="text-sm md:text-base">
          In case of services requiring payment, we request credit card or other
          payment account information, which will be used solely for processing
          payments. Your financial information will not be stored by us except
          for the name and address of the card holder, the expiry date and the
          last four digits of the Credit Card number. Subject to your prior
          consent and where necessary for processing future payments, your
          financial information will be stored in encrypted form on secure
          servers of our reputed Payment Gateway Service Provider who is
          beholden to treating your Personal Information in accordance with this
          Privacy Policy Statement.
        </div>

        <div class="font-bold">Visitor Details</div>

        <div class="text-sm md:text-base">
          We use the Internet Protocol address, browser type, browser language,
          referring URL, files accessed, errors generated, time zone, operating
          system and other visitor details collected in our log files to analyze
          the trends, administer the website, track visitor’s movements and to
          improve our website. We link this automatically collected data to
          other information we collect about you.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">
          Cookies and Other Tracking Technologies
        </div>

        <div class="text-sm md:text-base">
          We use temporary and permanent cookies to enhance your experience of
          our Skywave CRM Services. Temporary cookies will be removed from your
          computer each time you close your browser. By selecting ‘keep me
          signed-in’ option in Skywave CRM Services, a permanent cookie will be
          stored in your computer and you will not be required to sign-in by
          providing complete login information each time you return to our
          website. If you have turned cookies off, you may not be able to use
          registered areas of the website. We tie cookie information to your
          email address when you elect to remain logged in so as to maintain and
          recall your preferences within the website. Technologies such as:
          cookies, beacons, tags and scripts are used by Skywave CRM and our
          partners [such as reseller partners], affiliates, or service providers
          [such as analytics service providers]. These technologies are used in
          analyzing trends, administering the site, tracking users’ movements
          around the site and to gather demographic information about our user
          base as a whole. We may receive reports based on the use of these
          technologies by these companies on an individual as well as aggregated
          basis.
        </div>
        <div class="text-sm md:text-base">
          We use Local Storage Objects (LSOs) such as HTML5 to store content
          information and preferences. Third parties with whom we partner to
          provide certain features on our site or to display advertising based
          upon your Web browsing activity use LSOs such as HTML 5 to collect and
          store information. Various browsers may offer their own management
          tools for removing HTML5 LSOs. basis.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">
          Behavioral Targeting / Re-Targeting
        </div>

        <div class="text-sm md:text-base">
          We partner with third parties to manage our advertisements on other
          sites. Our third party partners may use technologies such as cookies
          to gather information about your activities on this site and other
          sites in order to provide you advertising based upon your browsing
          activities and interests. If you wish to not have this information
          used for the purpose of serving you interest-based advertisements, you
          may opt-out by emailing optout@skywave.app. However, you will continue
          to receive generic advertisements on other websites that display
          advertisements.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Links from our website</div>

        <div class="text-sm md:text-base">
          Some pages of our website contain external links. You are advised to
          verify the privacy practices of such other websites. We are not
          responsible for the manner of use or misuse of information made
          available by you at such other websites. We encourage you not to
          provide Personal Information, without assuring yourselves of the
          Privacy Policy Statement of other websites.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Federated Authentication</div>

        <div class="text-sm md:text-base">
          You can log in to our site using federated authentication providers
          such as Facebook Connect. These services will authenticate your
          identity and provide you the option to share certain Personal
          Information with us such as your name and email address to
          pre-populate our sign up form.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">With whom we share Information</div>

        <div class="text-sm md:text-base">
          We may need to share your Personal Information and your data to our
          affiliates, resellers, service providers and business partners solely
          for the purpose of providing Skywave CRM Services to you. The purposes
          for which we may disclose your Personal Information or data to our
          service providers may include, but are not limited to, data storage,
          database management, web analytics and payment processing. These
          service providers are authorized to use your Personal Information or
          data only as necessary to provide these services to us. In such cases
          Skywave CRM will also ensure that such affiliates, resellers, service
          providers and business partners comply with this Privacy Policy
          Statement and adopt appropriate confidentiality and security measures.
          We will obtain your prior specific consent before we share your
          Personal Information or data to any person outside Skywave CRM for any
          purpose that is not directly connected with providing Skywave CRM
          Services to you. We will share your Personal Information with third
          parties only in the ways that are described in this Privacy Policy
          Statement. We do not sell your Personal Information to third parties.
          We may share generic aggregated demographic information not linked to
          any Personal Information regarding visitors and users with our
          business partners and advertisers. Please be aware that laws in
          various jurisdictions in which we operate may obligate us to disclose
          user information and the contents of your user account to the local
          law enforcement authorities under a legal process or an enforceable
          government request. In addition, we may also disclose Personal
          Information and contents of your user account to law enforcement
          authorities if such disclosure is determined to be necessary by
          Skywave CRM in our sole and absolute discretion for protecting the
          safety of our users, employees, or the general public. If Skywave CRM
          is involved in a merger, acquisition, or sale of all or a portion of
          its business or assets, you will be notified via email and/or a
          prominent notice on our website of any change in ownership or uses of
          your Personal Information, as well as any choices you may have
          regarding your Personal Information.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">How secure is your Information</div>

        <div class="text-sm md:text-base">
          We adopt industry appropriate data collection, storage and processing
          practices and security measures, as well as physical security measures
          to protect against unauthorized access, alteration, disclosure or
          destruction of your Personal Information, username, password,
          transaction information and data stored in your user account. Access
          to your name and email address is restricted to our employees who need
          to know such information in connection with providing Skywave CRM
          Services to you and are bound by confidentiality obligations.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Your Choice in Information Use</div>

        <div class="text-sm md:text-base">
          In the event we decide to use your Personal Information for any
          purpose other than as stated in this Privacy Policy Statement, we will
          offer you an effective way to opt out of the use of your Personal
          Information for those other purposes. From time to time, we may send
          emails to you regarding new services, releases and upcoming events.
          You may opt out of receiving newsletters and other secondary messages
          from Skywave CRM by selecting the ‘unsubscribe’ function present in
          every email we send. However, you will continue to receive essential
          transactional emails.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">
          Accessing, Updating and Removing Personal Information
        </div>

        <div class="text-sm md:text-base">
          Upon request, we will provide you with information about whether we
          hold any of your Personal Information. Users who wish to correct,
          update or remove any Personal Information including those from a
          public forum, directory or testimonial on our site may do so either by
          accessing their user account or by contacting Skywave CRM Customer
          Support Services at support@skywave.app. Such changes may take up to
          48 hours to take effect. We respond to all enquiries within 30 days.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Investigation of Illegal Activity</div>

        <div class="text-sm md:text-base">
          We may need to provide access to your Personal Information and the
          contents of your user account to our employees and service providers
          for the purpose of investigating any suspected illegal activity or
          potential violation of the terms and conditions for use of Skywave CRM
          Services. However, Skywave CRM will ensure that such access is in
          compliance with this Privacy Policy Statement and subject to
          appropriate confidentiality and security measures.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Enforcement of Privacy Policy</div>

        <div class="text-sm md:text-base">
          We make every effort, including periodic reviews to ensure that
          Personal Information provided by you is used in conformity with this
          Privacy Policy Statement. If you have any concerns regarding our
          adherence to this Privacy Policy Statement or the manner in which
          Personal Information is used for the purpose of providing Skywave CRM
          Services, kindly contact Skywave CRM Customer Support Services at
          support@skywave.app. We will contact you to address your concerns and
          we will also co-operate with regulatory authorities in this regard if
          needed.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Notification of Changes</div>

        <div class="break-before-all">
          We may modify the Privacy Policy Statement upon notice to you at any
          time through a service announcement or by sending email to your
          primary email address. If we make significant changes in the Privacy
          Policy Statement that affect your rights, You will be provided with at
          least 30 days advance notice of the changes by email to your primary
          email address. You may terminate your use of Skywave CRM Services by
          providing Skywave CRM notice by email within 30 days of being notified
          of the availability of the modified Privacy Policy Statement if the
          Privacy Policy Statement is modified in a manner that substantially
          affects your rights in connection with use of Skywave CRM Services.
          Your continued use of Skywave CRM Services after the effective date of
          any change to the Privacy Policy Statement will be deemed to be your
          agreement to the modified Privacy Policy Statement. You will not
          receive email notification of minor changes to the Privacy Policy
          Statement. If you are concerned about how your Personal Information is
          used, you should check back at skywave.app/privacy-policy
          periodically.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Blogs and Forums</div>

        <div class="text-sm md:text-base">
          We provide the capacity for users to post information in blogs and
          forums for sharing information in a public space on the website. This
          information is publicly available to all users of these forums and
          visitors to our website. We require registration to publish
          information, but given the public nature of both platforms, any
          Personal Information disclosed within these forums may be used to
          contact users with unsolicited messages. We encourage users to be
          cautious in disclosure of Personal Information in public forums as
          Skywave CRM is not responsible for the Personal Information users
          elect to disclose.
        </div>
        <div class="text-sm md:text-base">
          Skywave CRM also supports third party widgets such as Facebook and
          Twitter buttons on the website that allow users to share articles and
          other information on different platforms. These widgets may collect
          your IP address, which page you are visiting on our site, and may set
          a cookie to enable the widgets to function properly. These widgets do
          not collect or store any Personal Information from users on the
          website and simply act as a bridge for your convenience in sharing
          information. Your interactions with these widgets are governed by the
          privacy policy of the company providing it.
        </div>
      </div>

      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Contact Us</div>

        <div class="text-sm md:text-base">
          If you have any questions or concerns regarding this Privacy Policy
          Statement, please contact us at legal@skywave.app. We shall respond to
          all inquiries within 30 days of receipt upon ascertaining your
          identity.
        </div>
      </div>
      <!-- TITLE & SECTION -->
      <div class="flex flex-col gap-3">
        <div class="text-xl md:text-3xl">Processor Disclosure</div>

        <div class="text-sm md:text-base">
          This certification covers our collection, use and disclosure of
          information we collect through our website www.skywave.zpp and through
          Skywave CRM Services. The use of information collected through Skywave
          CRM Services shall be limited to the purpose of providing the Skywave
          CRM Services to you.
        </div>
        <div class="text-sm md:text-base">
          Skywave CRM acknowledges that you have the right to access your
          Personal Information. Skywave CRM has no direct relationship with the
          individuals whose personal data it processes. If you are an individual
          user of Skywave CRM Services, you can directly contact Skywave CRM to
          correct, amend, or delete inaccurate data. In other cases, an
          individual who seeks access, or who seeks to correct, amend, or delete
          inaccurate data should direct such query to his data controller who
          may be a customer of Skywave CRM Services. If requested to remove data
          we will respond within a reasonable timeframe. We will retain Personal
          Information we process on behalf of our customers for as long as
          needed to provide Skywave CRM Services to our customers. Skywave CRM
          will retain Personal Information as necessary to comply with our legal
          obligations, resolve disputes, and enforce our agreements.
        </div>
        <div class="text-sm md:text-base">
          Skywave CRM may transfer Personal Information to third party service
          providers that help us in providing the Skywave CRM Services.
          Transfers to subsequent third parties are covered by the provisions in
          this Privacy Policy Statement regarding notice and choice and the
          service agreements with you.
        </div>
      </div>
    </div>
  </div>
</template>
