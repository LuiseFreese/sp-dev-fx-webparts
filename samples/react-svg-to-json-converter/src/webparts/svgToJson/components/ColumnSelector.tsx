import * as React from 'react';
import { Dropdown, MessageBar, IDropdownOption } from '@fluentui/react';
import styles from './SvgToJson.module.scss';
import useFetchFields from './useFetchFields';

interface ColumnSelectorProps {
  siteUrl: string;
  context: any;
  listId: string | null;
  onColumnChange: (columnName: string) => void;
}

const ColumnSelector: React.FC<ColumnSelectorProps> = ({ siteUrl, context, listId, onColumnChange }) => {
  const { fields, message, messageType } = useFetchFields(siteUrl, context, listId);

  const handleColumnChange = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      onColumnChange(option.key as string);
    }
  };

  return (
    <div className={styles.dropdown}>
      {message && <MessageBar messageBarType={messageType}>{message}</MessageBar>}
      <Dropdown
        placeholder="Select a column"
        label="Columns"
        options={fields}
        onChange={handleColumnChange}
        className={styles.dropdown}
        aria-label="Select a column"
      />
    </div>
  );
};

export default ColumnSelector;