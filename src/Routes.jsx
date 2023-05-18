import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Signin = React.lazy(() => import("pages/Signin"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const Twitterlogin = React.lazy(() => import("pages/Twitterlogin"));
const StoreLocator = React.lazy(() => import("pages/StoreLocator"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SendMessage = React.lazy(() => import("pages/SendMessage"));
const Offlinework = React.lazy(() => import("pages/Offlinework"));
const SecurityPolicy = React.lazy(() => import("pages/SecurityPolicy"));
const SerchHistory = React.lazy(() => import("pages/SerchHistory"));
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const PrivateChat = React.lazy(() => import("pages/PrivateChat"));
const PrivacySettings = React.lazy(() => import("pages/PrivacySettings"));
const XMLCSVTempalateBuilder = React.lazy(() =>
  import("pages/XMLCSVTempalateBuilder")
);
const PhoneVerification = React.lazy(() => import("pages/PhoneVerification"));
const WorldClock = React.lazy(() => import("pages/WorldClock"));
const PasswordStrength = React.lazy(() => import("pages/PasswordStrength"));
const VolumeControl = React.lazy(() => import("pages/VolumeControl"));
const PasscodeLock = React.lazy(() => import("pages/PasscodeLock"));
const Syncoptions = React.lazy(() => import("pages/Syncoptions"));
const LostDeviceProtection = React.lazy(() =>
  import("pages/LostDeviceProtection")
);
const ZIPCodeSearch = React.lazy(() => import("pages/ZIPCodeSearch"));
const SyncSettings = React.lazy(() => import("pages/SyncSettings"));
const Location = React.lazy(() => import("pages/Location"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const SplitViewScreen = React.lazy(() => import("pages/SplitViewScreen"));
const LeechProtection = React.lazy(() => import("pages/LeechProtection"));
const VideoAds = React.lazy(() => import("pages/VideoAds"));
const StoreCredits = React.lazy(() => import("pages/StoreCredits"));
const ScreenshotEditor = React.lazy(() => import("pages/ScreenshotEditor"));
const HelpCenter = React.lazy(() => import("pages/HelpCenter"));
const StatisticsReports = React.lazy(() => import("pages/StatisticsReports"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const PerformanceTracker = React.lazy(() => import("pages/PerformanceTracker"));
const Geofence = React.lazy(() => import("pages/Geofence"));
const SearchTermsReport = React.lazy(() => import("pages/SearchTermsReport"));
const ShippingChargeCalculator = React.lazy(() =>
  import("pages/ShippingChargeCalculator")
);
const OnboardingGuide = React.lazy(() => import("pages/OnboardingGuide"));
const EmailDeliverability = React.lazy(() =>
  import("pages/EmailDeliverability")
);
const TaxCalculator = React.lazy(() => import("pages/TaxCalculator"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const TaskAllocatorOne = React.lazy(() => import("pages/TaskAllocatorOne"));
const ShippingAddressValidation = React.lazy(() =>
  import("pages/ShippingAddressValidation")
);
const InviteFriends = React.lazy(() => import("pages/InviteFriends"));
const SavedCards = React.lazy(() => import("pages/SavedCards"));
const Referrals = React.lazy(() => import("pages/Referrals"));
const QuoteManagement = React.lazy(() => import("pages/QuoteManagement"));
const TaskViews = React.lazy(() => import("pages/TaskViews"));
const ProductQuickview = React.lazy(() => import("pages/ProductQuickview"));
const DownloadPermission = React.lazy(() => import("pages/DownloadPermission"));
const ReorderPurchase = React.lazy(() => import("pages/ReorderPurchase"));
const UsageInsights = React.lazy(() => import("pages/UsageInsights"));
const UserGroups = React.lazy(() => import("pages/UserGroups"));
const PledgeTracking = React.lazy(() => import("pages/PledgeTracking"));
const RolesPermissions = React.lazy(() => import("pages/RolesPermissions"));
const QATracker = React.lazy(() => import("pages/QATracker"));
const TaskBlocker = React.lazy(() => import("pages/TaskBlocker"));
const Summarycard = React.lazy(() => import("pages/Summarycard"));
const Print = React.lazy(() => import("pages/Print"));
const LanguageSupport = React.lazy(() => import("pages/LanguageSupport"));
const Disableads = React.lazy(() => import("pages/Disableads"));
const RefundManagement = React.lazy(() => import("pages/RefundManagement"));
const TicketSystem = React.lazy(() => import("pages/TicketSystem"));
const TimesheetManagement = React.lazy(() =>
  import("pages/TimesheetManagement")
);
const InventoryTrendAnalysis = React.lazy(() =>
  import("pages/InventoryTrendAnalysis")
);
const RemoteAdministration = React.lazy(() =>
  import("pages/RemoteAdministration")
);
const ProjectPortfolio = React.lazy(() => import("pages/ProjectPortfolio"));
const VisualSearch = React.lazy(() => import("pages/VisualSearch"));
const TaskAllocator = React.lazy(() => import("pages/TaskAllocator"));
const RFID = React.lazy(() => import("pages/RFID"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const Languageoptions = React.lazy(() => import("pages/Languageoptions"));
const Dataencryption = React.lazy(() => import("pages/Dataencryption"));
const PremiumPlanComparison = React.lazy(() =>
  import("pages/PremiumPlanComparison")
);
const TimeTrackingBilling = React.lazy(() =>
  import("pages/TimeTrackingBilling")
);
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const ProjectsTracking = React.lazy(() => import("pages/ProjectsTracking"));
const ProjectReporting = React.lazy(() => import("pages/ProjectReporting"));
const TextComparison = React.lazy(() => import("pages/TextComparison"));
const ReviewApproval = React.lazy(() => import("pages/ReviewApproval"));
const PushNotifications = React.lazy(() => import("pages/PushNotifications"));
const RequestManagement = React.lazy(() => import("pages/RequestManagement"));
const GuestLogin = React.lazy(() => import("pages/GuestLogin"));
const DataStorage = React.lazy(() => import("pages/DataStorage"));
const Playlist = React.lazy(() => import("pages/Playlist"));
const CustomisableUserProfile = React.lazy(() =>
  import("pages/CustomisableUserProfile")
);
const Payments = React.lazy(() => import("pages/Payments"));
const Review = React.lazy(() => import("pages/Review"));
const SwitchAccount = React.lazy(() => import("pages/SwitchAccount"));
const Events = React.lazy(() => import("pages/Events"));
const LiveChatSummary = React.lazy(() => import("pages/LiveChatSummary"));
const ProjectPortfolioOne = React.lazy(() =>
  import("pages/ProjectPortfolioOne")
);
const TargettedFeed = React.lazy(() => import("pages/TargettedFeed"));
const Prioritise = React.lazy(() => import("pages/Prioritise"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const QRCode = React.lazy(() => import("pages/QRCode"));
const FreeCredits = React.lazy(() => import("pages/FreeCredits"));
const KanbanBoard = React.lazy(() => import("pages/KanbanBoard"));
const CallRecording = React.lazy(() => import("pages/CallRecording"));
const CountryCodeBlocking = React.lazy(() =>
  import("pages/CountryCodeBlocking")
);
const PaymentAdmin = React.lazy(() => import("pages/PaymentAdmin"));
const WaitingList = React.lazy(() => import("pages/WaitingList"));
const OrganisationHierarchy = React.lazy(() =>
  import("pages/OrganisationHierarchy")
);
const EmailList = React.lazy(() => import("pages/EmailList"));
const DashboardGuests = React.lazy(() => import("pages/DashboardGuests"));
const NotificationSettings = React.lazy(() =>
  import("pages/NotificationSettings")
);
const StereoscopicDisplay = React.lazy(() =>
  import("pages/StereoscopicDisplay")
);
const LeaveTracker = React.lazy(() => import("pages/LeaveTracker"));
const LocationBasedAlerts = React.lazy(() =>
  import("pages/LocationBasedAlerts")
);
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const Favourites = React.lazy(() => import("pages/Favourites"));
const ICalenderSupport = React.lazy(() => import("pages/ICalenderSupport"));
const AudioSlideShow = React.lazy(() => import("pages/AudioSlideShow"));
const ContentDeliveryNetwork = React.lazy(() =>
  import("pages/ContentDeliveryNetwork")
);
const Multiplecurrencysupport = React.lazy(() =>
  import("pages/Multiplecurrencysupport")
);
const QuestionBank = React.lazy(() => import("pages/QuestionBank"));
const Orderdetailview = React.lazy(() => import("pages/Orderdetailview"));
const LeadManagement = React.lazy(() => import("pages/LeadManagement"));
const DailyTimeLimit = React.lazy(() => import("pages/DailyTimeLimit"));
const IdeaManagement = React.lazy(() => import("pages/IdeaManagement"));
const SmartCategorisation = React.lazy(() =>
  import("pages/SmartCategorisation")
);
const EnableLinkedAccounts = React.lazy(() =>
  import("pages/EnableLinkedAccounts")
);
const Ordersummary = React.lazy(() => import("pages/Ordersummary"));
const GameScore = React.lazy(() => import("pages/GameScore"));
const DiscountsOffers = React.lazy(() => import("pages/DiscountsOffers"));
const GoogleCalenderSync = React.lazy(() => import("pages/GoogleCalenderSync"));
const AudioLibrary = React.lazy(() => import("pages/AudioLibrary"));
const Captcha = React.lazy(() => import("pages/Captcha"));
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const Polling = React.lazy(() => import("pages/Polling"));
const ExpressDelivery = React.lazy(() => import("pages/ExpressDelivery"));
const FromApprovalWorkflow = React.lazy(() =>
  import("pages/FromApprovalWorkflow")
);
const DailyEmailSignUp = React.lazy(() => import("pages/DailyEmailSignUp"));
const Customisableusersubscri = React.lazy(() =>
  import("pages/Customisableusersubscri")
);
const GanttChart = React.lazy(() => import("pages/GanttChart"));
const RepeaingTasks = React.lazy(() => import("pages/RepeaingTasks"));
const AutomatedPrioritisation = React.lazy(() =>
  import("pages/AutomatedPrioritisation")
);
const EmailNotification = React.lazy(() => import("pages/EmailNotification"));
const Map = React.lazy(() => import("pages/Map"));
const Scoring = React.lazy(() => import("pages/Scoring"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const DownloadOptions = React.lazy(() => import("pages/DownloadOptions"));
const CameraAccess = React.lazy(() => import("pages/CameraAccess"));
const DonationPayments = React.lazy(() => import("pages/DonationPayments"));
const GoogleLogin = React.lazy(() => import("pages/GoogleLogin"));
const ExpenseTracking = React.lazy(() => import("pages/ExpenseTracking"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const BudgetingForecasting = React.lazy(() =>
  import("pages/BudgetingForecasting")
);
const ActivityLog = React.lazy(() => import("pages/ActivityLog"));
const CreditDebitCardPayments = React.lazy(() =>
  import("pages/CreditDebitCardPayments")
);
const ProductRecommendationEngine = React.lazy(() =>
  import("pages/ProductRecommendationEngine")
);
const TeamBuilder = React.lazy(() => import("pages/TeamBuilder"));
const DesktopNotification = React.lazy(() =>
  import("pages/DesktopNotification")
);
const MapSettings = React.lazy(() => import("pages/MapSettings"));
const MultiplayerSupport = React.lazy(() => import("pages/MultiplayerSupport"));
const CouponCodeGenerator = React.lazy(() =>
  import("pages/CouponCodeGenerator")
);
const ConvertFiles = React.lazy(() => import("pages/ConvertFiles"));
const AudioCall = React.lazy(() => import("pages/AudioCall"));
const BlockUsers = React.lazy(() => import("pages/BlockUsers"));
const CollectTransactionFees = React.lazy(() =>
  import("pages/CollectTransactionFees")
);
const FeedbackCollection = React.lazy(() => import("pages/FeedbackCollection"));
const OrderTracking = React.lazy(() => import("pages/OrderTracking"));
const CVResumeCandidateManagement = React.lazy(() =>
  import("pages/CVResumeCandidateManagement")
);
const AdManager = React.lazy(() => import("pages/AdManager"));
const AccountTransfer = React.lazy(() => import("pages/AccountTransfer"));
const CategoriesSubCategories = React.lazy(() =>
  import("pages/CategoriesSubCategories")
);
const MultipleGestureRecogniser = React.lazy(() =>
  import("pages/MultipleGestureRecogniser")
);
const Tasklist = React.lazy(() => import("pages/Tasklist"));
const DailyScheduleNotification = React.lazy(() =>
  import("pages/DailyScheduleNotification")
);
const ItemGrouper = React.lazy(() => import("pages/ItemGrouper"));
const Leaderboard = React.lazy(() => import("pages/Leaderboard"));
const AuctionBIdding = React.lazy(() => import("pages/AuctionBIdding"));
const AppointmentManagement = React.lazy(() =>
  import("pages/AppointmentManagement")
);
const AudioMusic = React.lazy(() => import("pages/AudioMusic"));
const AppUpdates = React.lazy(() => import("pages/AppUpdates"));
const CenralizedBilling = React.lazy(() => import("pages/CenralizedBilling"));
const Feedback = React.lazy(() => import("pages/Feedback"));
const CustomisedOrderStatus = React.lazy(() =>
  import("pages/CustomisedOrderStatus")
);
const CertificationTracking = React.lazy(() =>
  import("pages/CertificationTracking")
);
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const AccountScore = React.lazy(() => import("pages/AccountScore"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const FaceTagging = React.lazy(() => import("pages/FaceTagging"));
const Scheduling = React.lazy(() => import("pages/Scheduling"));
const AutomatedEmailSending = React.lazy(() =>
  import("pages/AutomatedEmailSending")
);
const ItemAvailability = React.lazy(() => import("pages/ItemAvailability"));
const AffiliateURL = React.lazy(() => import("pages/AffiliateURL"));
const Annotations = React.lazy(() => import("pages/Annotations"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/annotations" element={<Annotations />} />
          <Route path="/affiliateurl" element={<AffiliateURL />} />
          <Route path="/itemavailability" element={<ItemAvailability />} />
          <Route
            path="/automatedemailsending"
            element={<AutomatedEmailSending />}
          />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/facetagging" element={<FaceTagging />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/accountscore" element={<AccountScore />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route
            path="/certificationtracking"
            element={<CertificationTracking />}
          />
          <Route
            path="/customisedorderstatus"
            element={<CustomisedOrderStatus />}
          />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cenralizedbilling" element={<CenralizedBilling />} />
          <Route path="/appupdates" element={<AppUpdates />} />
          <Route path="/audiomusic" element={<AudioMusic />} />
          <Route
            path="/appointmentmanagement"
            element={<AppointmentManagement />}
          />
          <Route path="/auctionbidding" element={<AuctionBIdding />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/itemgrouper" element={<ItemGrouper />} />
          <Route
            path="/dailyschedulenotification"
            element={<DailyScheduleNotification />}
          />
          <Route path="/tasklist" element={<Tasklist />} />
          <Route
            path="/multiplegesturerecogniser"
            element={<MultipleGestureRecogniser />}
          />
          <Route
            path="/categoriessubcategories"
            element={<CategoriesSubCategories />}
          />
          <Route path="/accounttransfer" element={<AccountTransfer />} />
          <Route path="/admanager" element={<AdManager />} />
          <Route
            path="/cvresumecandidatemanagement"
            element={<CVResumeCandidateManagement />}
          />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/feedbackcollection" element={<FeedbackCollection />} />
          <Route
            path="/collecttransactionfees"
            element={<CollectTransactionFees />}
          />
          <Route path="/blockusers" element={<BlockUsers />} />
          <Route path="/audiocall" element={<AudioCall />} />
          <Route path="/convertfiles" element={<ConvertFiles />} />
          <Route
            path="/couponcodegenerator"
            element={<CouponCodeGenerator />}
          />
          <Route path="/multiplayersupport" element={<MultiplayerSupport />} />
          <Route path="/mapsettings" element={<MapSettings />} />
          <Route
            path="/desktopnotification"
            element={<DesktopNotification />}
          />
          <Route path="/teambuilder" element={<TeamBuilder />} />
          <Route
            path="/productrecommendationengine"
            element={<ProductRecommendationEngine />}
          />
          <Route
            path="/creditdebitcardpayments"
            element={<CreditDebitCardPayments />}
          />
          <Route path="/activitylog" element={<ActivityLog />} />
          <Route
            path="/budgetingforecasting"
            element={<BudgetingForecasting />}
          />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/expensetracking" element={<ExpenseTracking />} />
          <Route path="/googlelogin" element={<GoogleLogin />} />
          <Route path="/donationpayments" element={<DonationPayments />} />
          <Route path="/cameraaccess" element={<CameraAccess />} />
          <Route path="/downloadoptions" element={<DownloadOptions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scoring" element={<Scoring />} />
          <Route path="/map" element={<Map />} />
          <Route path="/emailnotification" element={<EmailNotification />} />
          <Route
            path="/automatedprioritisation"
            element={<AutomatedPrioritisation />}
          />
          <Route path="/repeaingtasks" element={<RepeaingTasks />} />
          <Route path="/ganttchart" element={<GanttChart />} />
          <Route
            path="/customisableusersubscri"
            element={<Customisableusersubscri />}
          />
          <Route path="/dailyemailsignup" element={<DailyEmailSignUp />} />
          <Route
            path="/fromapprovalworkflow"
            element={<FromApprovalWorkflow />}
          />
          <Route path="/expressdelivery" element={<ExpressDelivery />} />
          <Route path="/polling" element={<Polling />} />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route path="/captcha" element={<Captcha />} />
          <Route path="/audiolibrary" element={<AudioLibrary />} />
          <Route path="/googlecalendersync" element={<GoogleCalenderSync />} />
          <Route path="/discountsoffers" element={<DiscountsOffers />} />
          <Route path="/gamescore" element={<GameScore />} />
          <Route path="/ordersummary" element={<Ordersummary />} />
          <Route
            path="/enablelinkedaccounts"
            element={<EnableLinkedAccounts />}
          />
          <Route
            path="/smartcategorisation"
            element={<SmartCategorisation />}
          />
          <Route path="/ideamanagement" element={<IdeaManagement />} />
          <Route path="/dailytimelimit" element={<DailyTimeLimit />} />
          <Route path="/leadmanagement" element={<LeadManagement />} />
          <Route path="/orderdetailview" element={<Orderdetailview />} />
          <Route path="/questionbank" element={<QuestionBank />} />
          <Route
            path="/multiplecurrencysupport"
            element={<Multiplecurrencysupport />}
          />
          <Route
            path="/contentdeliverynetwork"
            element={<ContentDeliveryNetwork />}
          />
          <Route path="/audioslideshow" element={<AudioSlideShow />} />
          <Route path="/icalendersupport" element={<ICalenderSupport />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route
            path="/locationbasedalerts"
            element={<LocationBasedAlerts />}
          />
          <Route path="/leavetracker" element={<LeaveTracker />} />
          <Route
            path="/stereoscopicdisplay"
            element={<StereoscopicDisplay />}
          />
          <Route
            path="/notificationsettings"
            element={<NotificationSettings />}
          />
          <Route path="/dashboardguests" element={<DashboardGuests />} />
          <Route path="/emaillist" element={<EmailList />} />
          <Route
            path="/organisationhierarchy"
            element={<OrganisationHierarchy />}
          />
          <Route path="/waitinglist" element={<WaitingList />} />
          <Route path="/paymentadmin" element={<PaymentAdmin />} />
          <Route
            path="/countrycodeblocking"
            element={<CountryCodeBlocking />}
          />
          <Route path="/callrecording" element={<CallRecording />} />
          <Route path="/kanbanboard" element={<KanbanBoard />} />
          <Route path="/freecredits" element={<FreeCredits />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/prioritise" element={<Prioritise />} />
          <Route path="/targettedfeed" element={<TargettedFeed />} />
          <Route
            path="/projectportfolioone"
            element={<ProjectPortfolioOne />}
          />
          <Route path="/livechatsummary" element={<LiveChatSummary />} />
          <Route path="/events" element={<Events />} />
          <Route path="/switchaccount" element={<SwitchAccount />} />
          <Route path="/review" element={<Review />} />
          <Route path="/payments" element={<Payments />} />
          <Route
            path="/customisableuserprofile"
            element={<CustomisableUserProfile />}
          />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/datastorage" element={<DataStorage />} />
          <Route path="/guestlogin" element={<GuestLogin />} />
          <Route path="/requestmanagement" element={<RequestManagement />} />
          <Route path="/pushnotifications" element={<PushNotifications />} />
          <Route path="/reviewapproval" element={<ReviewApproval />} />
          <Route path="/textcomparison" element={<TextComparison />} />
          <Route path="/projectreporting" element={<ProjectReporting />} />
          <Route path="/projectstracking" element={<ProjectsTracking />} />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route
            path="/timetrackingbilling"
            element={<TimeTrackingBilling />}
          />
          <Route
            path="/premiumplancomparison"
            element={<PremiumPlanComparison />}
          />
          <Route path="/dataencryption" element={<Dataencryption />} />
          <Route path="/languageoptions" element={<Languageoptions />} />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/rfid" element={<RFID />} />
          <Route path="/taskallocator" element={<TaskAllocator />} />
          <Route path="/visualsearch" element={<VisualSearch />} />
          <Route path="/projectportfolio" element={<ProjectPortfolio />} />
          <Route
            path="/remoteadministration"
            element={<RemoteAdministration />}
          />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route
            path="/timesheetmanagement"
            element={<TimesheetManagement />}
          />
          <Route path="/ticketsystem" element={<TicketSystem />} />
          <Route path="/refundmanagement" element={<RefundManagement />} />
          <Route path="/disableads" element={<Disableads />} />
          <Route path="/languagesupport" element={<LanguageSupport />} />
          <Route path="/print" element={<Print />} />
          <Route path="/summarycard" element={<Summarycard />} />
          <Route path="/taskblocker" element={<TaskBlocker />} />
          <Route path="/qatracker" element={<QATracker />} />
          <Route path="/rolespermissions" element={<RolesPermissions />} />
          <Route path="/pledgetracking" element={<PledgeTracking />} />
          <Route path="/usergroups" element={<UserGroups />} />
          <Route path="/usageinsights" element={<UsageInsights />} />
          <Route path="/reorderpurchase" element={<ReorderPurchase />} />
          <Route path="/downloadpermission" element={<DownloadPermission />} />
          <Route path="/productquickview" element={<ProductQuickview />} />
          <Route path="/taskviews" element={<TaskViews />} />
          <Route path="/quotemanagement" element={<QuoteManagement />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/savedcards" element={<SavedCards />} />
          <Route path="/invitefriends" element={<InviteFriends />} />
          <Route
            path="/shippingaddressvalidation"
            element={<ShippingAddressValidation />}
          />
          <Route path="/taskallocatorone" element={<TaskAllocatorOne />} />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/taxcalculator" element={<TaxCalculator />} />
          <Route
            path="/emaildeliverability"
            element={<EmailDeliverability />}
          />
          <Route path="/onboardingguide" element={<OnboardingGuide />} />
          <Route
            path="/shippingchargecalculator"
            element={<ShippingChargeCalculator />}
          />
          <Route path="/searchtermsreport" element={<SearchTermsReport />} />
          <Route path="/geofence" element={<Geofence />} />
          <Route path="/performancetracker" element={<PerformanceTracker />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/statisticsreports" element={<StatisticsReports />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/screenshoteditor" element={<ScreenshotEditor />} />
          <Route path="/storecredits" element={<StoreCredits />} />
          <Route path="/videoads" element={<VideoAds />} />
          <Route path="/leechprotection" element={<LeechProtection />} />
          <Route path="/splitviewscreen" element={<SplitViewScreen />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/location" element={<Location />} />
          <Route path="/syncsettings" element={<SyncSettings />} />
          <Route path="/zipcodesearch" element={<ZIPCodeSearch />} />
          <Route
            path="/lostdeviceprotection"
            element={<LostDeviceProtection />}
          />
          <Route path="/syncoptions" element={<Syncoptions />} />
          <Route path="/passcodelock" element={<PasscodeLock />} />
          <Route path="/volumecontrol" element={<VolumeControl />} />
          <Route path="/passwordstrength" element={<PasswordStrength />} />
          <Route path="/worldclock" element={<WorldClock />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route
            path="/xmlcsvtempalatebuilder"
            element={<XMLCSVTempalateBuilder />}
          />
          <Route path="/privacysettings" element={<PrivacySettings />} />
          <Route path="/privatechat" element={<PrivateChat />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/serchhistory" element={<SerchHistory />} />
          <Route path="/securitypolicy" element={<SecurityPolicy />} />
          <Route path="/offlinework" element={<Offlinework />} />
          <Route path="/sendmessage" element={<SendMessage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/storelocator" element={<StoreLocator />} />
          <Route path="/twitterlogin" element={<Twitterlogin />} />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
