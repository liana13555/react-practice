import { PageContainer } from './PageContainer/PageContainer';
import { Button } from './Button/Button';
import { PalettePicker } from '../components/PalettePicker/PalettePicker';
import { FaAddressBook } from 'react-icons/fa';

export const Example = () => {
    return (
        <PageContainer>
            <Button icon={FaAddressBook}>Super button</Button>
            <PalettePicker />
        </PageContainer>
    );
};