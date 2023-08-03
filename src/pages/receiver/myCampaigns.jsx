import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/drawer";
import CampaignTable from "../../components/AdminTables/CampaignTable";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import { GetAllCampagins } from "../../request/receiverAPIS";
import DataTable from "../../components/table/table"

const data = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon />,
    path: "",
  },
  {
    name: "My Campaigns",
    icon: <InboxOutlinedIcon />,
    active: true,
    color: "#fff",
    path: "myCampaigns"

  },
];

const columns = [
    { id: 'campaign', label: 'Campaigns', minWidth: 170 },
    {
      id: 'Endorsement',
      label: 'Endorsement',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'amountCollected',
      label: 'Amount Collected',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'startDate',
      label: 'Campaign Start Date',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },{
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
      },
  ];
const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState();

  useEffect(() => {
    GetAllCampagins('64b9837cc6fe1b7ee850ba6d')
      .then((response) => {
        console.log(response.data.allCampaigns, "activeCampaign");
        setCampaigns(response?.data.allCampaigns);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 250px", marginRight: "30px" }}>
        <Sidebar data={data} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <h1 style={{ marginBottom: "30px" }}>Campaigns</h1>
        {/* Check if campaigns has data before rendering DataTable */}
        {campaigns && campaigns.length > 0 ? (
          <DataTable columns={columns} rows={campaigns} style={{ width: "100vw" }} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MyCampaigns;
