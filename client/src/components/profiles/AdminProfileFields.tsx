import React from 'react';

interface AdminProfileProps {
  adminName: string;
  adminId : number;
  email: string;

  status: { 
    totalUsers:number
    bannedUsers: Number;
  onUserBan: (userId: string ) => Void;
  }
}

const AdminProfile: React.FC<AdminProfileProps> = ({
  adminName,
  stats,
  onUserBan
})