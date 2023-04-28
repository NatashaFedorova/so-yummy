import { AppInfoItem, AppInfoList } from './AppInfo.styled';

export const AppInfo = () => {
  return (
    <AppInfoList>
      <AppInfoItem>Database of recipes that can be replenished </AppInfoItem>
      <AppInfoItem>
        Flexible search for desired and unwanted ingredients
      </AppInfoItem>
      <AppInfoItem>Ability to add your own recipes with photos</AppInfoItem>
      <AppInfoItem>Convenient and easy to use</AppInfoItem>
    </AppInfoList>
  );
};
