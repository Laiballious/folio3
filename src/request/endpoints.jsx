
export const ENDPOINTS = {
// Public
    LOGIN: "/login",
    SIGIN: "/signup",
    LOGOUT: "/logout",
    SEND_OTP_MAIL:"/SendOTPmail",
    VERIFY_OTP :'/verifyOTP',
    UPDATE_PASSWORD: '/resetPass',
    GET_CAMAPIGN: 'common/campaign/',
    UPDATE_PROFILE: "common/updateProfile/",
    RESET_PASSWORD: "common/UpdatePassword/",
    VIEW_ALL_CAMPAIGNS: "common/viewAll",

// Receiver
    CREATE_CAMPAIGN: "/receiver/createCampagin",
    GET_USER_CAMPAIGNS: 'receiver/dashbaord/',
    GET_USER_ALL_CAMPAIGNS: 'receiver/dashbaord/myCampaigns/',


    GET_ALL_CAMAPIGNS : "/donor/campaigns",
    DONATE_NOW : "/donor/donate/",
    DONATION : "/donor/donatedcampaign",
    MY_DONATIONS: "donor/donatedcampaign/",

// Admin
    GET_ACTIVE_CAMPAIGNS :"/admin/dashboard",
    GET_DONORS: "/admin/getDonors" ,
    GET_CAMAPIGN_CREATORS :"/admin/GetCampaignCreators"

  };