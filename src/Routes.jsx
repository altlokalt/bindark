import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Blog1Dark = React.lazy(() => import("pages/Blog1Dark"));
const LiveAuctionBannerDark = React.lazy(() =>
  import("pages/LiveAuctionBannerDark")
);
const LiveauctionDark = React.lazy(() => import("pages/LiveauctionDark"));
const BlogDetails1Dark = React.lazy(() => import("pages/BlogDetails1Dark"));
const Blog2Dark = React.lazy(() => import("pages/Blog2Dark"));
const SignupDark = React.lazy(() => import("pages/SignupDark"));
const LoginDark = React.lazy(() => import("pages/LoginDark"));
const RankingDark = React.lazy(() => import("pages/RankingDark"));
const ConnectWalletDark = React.lazy(() => import("pages/ConnectWalletDark"));
const BlogDetails2Dark = React.lazy(() => import("pages/BlogDetails2Dark"));
const ItemDetailsDark = React.lazy(() => import("pages/ItemDetailsDark"));
const ExploreBannerDark = React.lazy(() => import("pages/ExploreBannerDark"));
const ExploreGridDark = React.lazy(() => import("pages/ExploreGridDark"));
const Explore4ItemDark = React.lazy(() => import("pages/Explore4ItemDark"));
const ExploreLeftBarDark = React.lazy(() => import("pages/ExploreLeftBarDark"));
const ItemDetailsHistory = React.lazy(() => import("pages/ItemDetailsHistory"));
const ItemDetailsBidDark = React.lazy(() => import("pages/ItemDetailsBidDark"));
const ItemDetailsAuctionsDark = React.lazy(() =>
  import("pages/ItemDetailsAuctionsDark")
);
const ItemDetailsAuctionsBidDark = React.lazy(() =>
  import("pages/ItemDetailsAuctionsBidDark")
);
const ItemDetailsAuctionsHistoryDark = React.lazy(() =>
  import("pages/ItemDetailsAuctionsHistoryDark")
);
const ProfileInventoryDark = React.lazy(() =>
  import("pages/ProfileInventoryDark")
);
const FAQsDark = React.lazy(() => import("pages/FAQsDark"));
const HelpCenterDark = React.lazy(() => import("pages/HelpCenterDark"));
const AddNewNFTDark = React.lazy(() => import("pages/AddNewNFTDark"));
const CollectionDetailsDark = React.lazy(() =>
  import("pages/CollectionDetailsDark")
);
const ProfileFollowingDark1 = React.lazy(() =>
  import("pages/ProfileFollowingDark1")
);
const ProfileFavoritesDark = React.lazy(() =>
  import("pages/ProfileFavoritesDark")
);
const ProfileFollowingDark = React.lazy(() =>
  import("pages/ProfileFollowingDark")
);
const ProfileEditprofileDark = React.lazy(() =>
  import("pages/ProfileEditprofileDark")
);
const ProfileDashboardDark = React.lazy(() =>
  import("pages/ProfileDashboardDark")
);
const ContactDark = React.lazy(() => import("pages/ContactDark"));
const ProfileEditProfile2Dark = React.lazy(() =>
  import("pages/ProfileEditProfile2Dark")
);
const HoverDarkUser = React.lazy(() => import("pages/HoverDarkUser"));
const HoverDarkContact = React.lazy(() => import("pages/HoverDarkContact"));
const HoverDarkBlog = React.lazy(() => import("pages/HoverDarkBlog"));
const HoverDarkCreate = React.lazy(() => import("pages/HoverDarkCreate"));
const HoverDarkPage = React.lazy(() => import("pages/HoverDarkPage"));
const HoverDarkExplore = React.lazy(() => import("pages/HoverDarkExplore"));
const HoverDarkHome = React.lazy(() => import("pages/HoverDarkHome"));
const PopupPlaceBid = React.lazy(() => import("pages/PopupPlaceBid"));
const Homepage3Dark = React.lazy(() => import("pages/Homepage3Dark"));
const Homepage6Dark = React.lazy(() => import("pages/Homepage6Dark"));
const Homepage5Dark = React.lazy(() => import("pages/Homepage5Dark"));
const Homepage2Dark = React.lazy(() => import("pages/Homepage2Dark"));
const Homepage7Dark = React.lazy(() => import("pages/Homepage7Dark"));
const Homepage1Dark = React.lazy(() => import("pages/Homepage1Dark"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage1dark" element={<Homepage1Dark />} />
          <Route path="/homepage7dark" element={<Homepage7Dark />} />
          <Route path="/homepage2dark" element={<Homepage2Dark />} />
          <Route path="/homepage5dark" element={<Homepage5Dark />} />
          <Route path="/homepage6dark" element={<Homepage6Dark />} />
          <Route path="/homepage3dark" element={<Homepage3Dark />} />
          <Route path="/popupplacebid" element={<PopupPlaceBid />} />
          <Route path="/hoverdarkhome" element={<HoverDarkHome />} />
          <Route path="/hoverdarkexplore" element={<HoverDarkExplore />} />
          <Route path="/hoverdarkpage" element={<HoverDarkPage />} />
          <Route path="/hoverdarkcreate" element={<HoverDarkCreate />} />
          <Route path="/hoverdarkblog" element={<HoverDarkBlog />} />
          <Route path="/hoverdarkcontact" element={<HoverDarkContact />} />
          <Route path="/hoverdarkuser" element={<HoverDarkUser />} />
          <Route
            path="/profileeditprofile2dark"
            element={<ProfileEditProfile2Dark />}
          />
          <Route path="/contactdark" element={<ContactDark />} />
          <Route
            path="/profiledashboarddark"
            element={<ProfileDashboardDark />}
          />
          <Route
            path="/profileeditprofiledark"
            element={<ProfileEditprofileDark />}
          />
          <Route
            path="/profilefollowingdark"
            element={<ProfileFollowingDark />}
          />
          <Route
            path="/profilefavoritesdark"
            element={<ProfileFavoritesDark />}
          />
          <Route
            path="/profilefollowingdark1"
            element={<ProfileFollowingDark1 />}
          />
          <Route
            path="/collectiondetailsdark"
            element={<CollectionDetailsDark />}
          />
          <Route path="/addnewnftdark" element={<AddNewNFTDark />} />
          <Route path="/helpcenterdark" element={<HelpCenterDark />} />
          <Route path="/faqsdark" element={<FAQsDark />} />
          <Route
            path="/profileinventorydark"
            element={<ProfileInventoryDark />}
          />
          <Route
            path="/itemdetailsauctionshistorydark"
            element={<ItemDetailsAuctionsHistoryDark />}
          />
          <Route
            path="/itemdetailsauctionsbiddark"
            element={<ItemDetailsAuctionsBidDark />}
          />
          <Route
            path="/itemdetailsauctionsdark"
            element={<ItemDetailsAuctionsDark />}
          />
          <Route path="/itemdetailsbiddark" element={<ItemDetailsBidDark />} />
          <Route path="/itemdetailshistory" element={<ItemDetailsHistory />} />
          <Route path="/exploreleftbardark" element={<ExploreLeftBarDark />} />
          <Route path="/explore4itemdark" element={<Explore4ItemDark />} />
          <Route path="/exploregriddark" element={<ExploreGridDark />} />
          <Route path="/explorebannerdark" element={<ExploreBannerDark />} />
          <Route path="/itemdetailsdark" element={<ItemDetailsDark />} />
          <Route path="/blogdetails2dark" element={<BlogDetails2Dark />} />
          <Route path="/connectwalletdark" element={<ConnectWalletDark />} />
          <Route path="/rankingdark" element={<RankingDark />} />
          <Route path="/logindark" element={<LoginDark />} />
          <Route path="/signupdark" element={<SignupDark />} />
          <Route path="/blog2dark" element={<Blog2Dark />} />
          <Route path="/blogdetails1dark" element={<BlogDetails1Dark />} />
          <Route path="/liveauctiondark" element={<LiveauctionDark />} />
          <Route
            path="/liveauctionbannerdark"
            element={<LiveAuctionBannerDark />}
          />
          <Route path="/blog1dark" element={<Blog1Dark />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
