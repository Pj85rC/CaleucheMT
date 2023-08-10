import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";

export const getSocialIcon = (social, url) => {
    let Icon;
    switch (social) {
      case "facebook":
        Icon = FacebookIcon ;
        break;
      case "twitter":
        Icon = TwitterIcon ;
        break;
      case "instagram":
        Icon = InstagramIcon ;
        break;
      case "website":
        Icon = LanguageIcon ;
        break;
      default:
        Icon = WebIcon ;
        break;
    }

    return (
      <IconButton key={social} onClick={() => window.open(url, "_blank")}>
        <Icon style={{ color: "white" }} />
      </IconButton>
    );
  };