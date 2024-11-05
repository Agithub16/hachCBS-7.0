import React, { useState, useMemo, useEffect } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
} from '@mui/material';

const Settings = () => {
  // State for profile details
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // State for theme mode (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for notification settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // State for password
  const [password, setPassword] = useState('');

  // State for language preferences
  const [language, setLanguage] = useState('English');

  // State for privacy settings
  const [dataSharing, setDataSharing] = useState(false);

  // Load theme preference from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Create the theme object
  const theme = useMemo(() => createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  }), [isDarkMode]);

  // Handle profile form field changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle notification toggle
  const handleNotificationToggle = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Handle privacy toggle
  const handlePrivacyToggle = () => {
    setDataSharing((prev) => !prev);
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Implement API call to save profile details if needed
    console.log('Profile updated:', profile);
  };

  // Toggle theme mode
  const handleToggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>

        {/* Theme Toggle Button */}
        <Button variant="contained" onClick={handleToggleTheme} sx={{ mb: 3 }}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Button>

        <Divider sx={{ mb: 4 }} />

        {/* Profile Settings Form */}
        <Typography variant="h6" gutterBottom>
          Profile Settings
        </Typography>
        <form onSubmit={handleProfileSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleProfileChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={profile.phone}
                onChange={handleProfileChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>

        <Divider sx={{ my: 4 }} />

        {/* Notification Settings */}
        <Typography variant="h6" gutterBottom>
          Notification Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notificationsEnabled}
              onChange={handleNotificationToggle}
            />
          }
          label="Enable Notifications"
        />

        <Divider sx={{ my: 4 }} />

        {/* Account Security */}
        <Typography variant="h6" gutterBottom>
          Account Security
        </Typography>
        <TextField
          label="Change Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Update Password
        </Button>

        <Divider sx={{ my: 4 }} />

        {/* Language Preferences */}
        <Typography variant="h6" gutterBottom>
          Language Preferences
        </Typography>
        <Select
          value={language}
          onChange={handleLanguageChange}
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Hindi">Hindi</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="French">French</MenuItem>
        </Select>

        <Divider sx={{ my: 4 }} />

        {/* Privacy Settings */}
        <Typography variant="h6" gutterBottom>
          Privacy Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={dataSharing}
              onChange={handlePrivacyToggle}
            />
          }
          label="Share Data with Third Parties"
        />
      </Box>
    </ThemeProvider>
  );
};

export default Settings;
