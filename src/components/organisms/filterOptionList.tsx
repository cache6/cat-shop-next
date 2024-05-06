import Filter from '@/components/atoms/filter';

const FilterOptionList = () => {

    return (
        <>
            <Filter title="Your Title1" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} />
            <Filter title="Your Title2" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} />
            <Filter title="Your Title3" options={[{ id: "Option1", label: "Option1" }, { id: "Option2", label: "Option2" }]} />
        </>
    );
};

export default FilterOptionList;

