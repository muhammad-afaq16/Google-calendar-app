import MenuIcon from "@mui/icons-material/Menu";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import SearchBarCompoent from "./SearchBarCompoent";
import SearchIcon from "@mui/icons-material/Search";
import ProfileComponent from "./ProfileComponent";
import useGlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";

const CalenderHeader = () => {
  const [mmddyy, setMmddyy] = useState("");
  const [searchMeet, setSearchMeet] = useState(false);
  const { isOpenSidebar, setIsOpenSidebar } = useGlobalContext();
  const { monthIndex, setMonthIndex } = useGlobalContext();

  const handelIncrement = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handelDecrement = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleChange = (event) => {
    setMmddyy(event.target.value);
  };
  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "11px 25px",
          lineHeight: "8px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255)",
        }}
      >
        {searchMeet ? (
          <SearchBarCompoent setSearchMeet={setSearchMeet} />
        ) : (
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                paddingRight: "30px",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  padding: "8px",
                  borderRadius: "50%",
                  transition: "all .2s ease-in-out",
                  ":hover": {
                    backgroundColor: "#ddd",
                  },
                }}
                onClick={handleSidebarToggle}
              >
                <MenuIcon
                  sx={{
                    color: "#5f6368",
                    fontSize: "24px",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: "#ddd",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  "&>img": {
                    width: "40px",
                    height: "40px",
                    ml: 1,
                  },
                }}
              >
                <img src="/assets/calendar.png" alt="calenderImage" />
              </Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  lineHeight: "24px",
                  fontWeight: 300,
                }}
              >
                Calender
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "19px",
                ml: 2,
              }}
            >
              <Typography
                component="span"
                sx={{
                  padding: "5px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
                onClick={handleReset}
              >
                Today
              </Typography>
              <Box
                sx={{
                  ml: 1,
                  "& > .MuiSvgIcon-root": {
                    fontSize: "24px",
                    color: "rgb(95,99,104)",
                    cursor: "pointer",
                  },
                }}
              >
                <ChevronLeftIcon onClick={handelDecrement} />
                <ChevronRightIcon onClick={handelIncrement} />
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    ml: 1,
                    fontSize: "22px",
                    whiteSpace: "nowrap",
                    lineHeight: "28px",
                    fontWeight: 300,
                  }}
                >
                  {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {!searchMeet && (
            <Box onClick={() => setSearchMeet(true)}>
              <SearchIcon
                sx={{
                  fontSize: "25px",
                  mr: 1,
                  cursor: "pointer",
                  color: "#5f6368",
                }}
              />
            </Box>
          )}

          {!searchMeet && (
            <Box
              sx={{
                minWidth: 90,
                ".MuiSelect-select": {
                  padding: "8px 12px",
                },
              }}
            >
              <FormControl fullWidth>
                <Select value={mmddyy} onChange={handleChange}>
                  <MenuItem value={7}>Day</MenuItem>
                  <MenuItem value={4}>Week</MenuItem>
                  <MenuItem value={12}>Month</MenuItem>
                  <MenuItem value={1}>Year</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
          {/* profle */}
          <ProfileComponent />
        </Box>
      </Box>
    </>
  );
};

export default CalenderHeader;
