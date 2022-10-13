import Select, {components} from "react-select";
import React from "react";

const CustomSelect = ({
                           options,
                           onChange,
                           value,
                           isMulti = false,
                           closeMenuOnSelect = true,
                           isDisabled = false,
                           placeholder = "Choose an option"
                       }) => {
    const MultiValueRemove = (props) => {
        return (
            <components.MultiValueRemove {...props}>
                <img src="/images/dashboard/proposals/remove.svg" alt=""/>
            </components.MultiValueRemove>
        );
    };

    const NoOptionsMessage = (props) => {
        return (
            <components.NoOptionsMessage {...props} >
                <span>Liste vide...</span>
            </components.NoOptionsMessage>
        );
    };

    const customFilter = (option, searchText) => {
        if (searchText === '') {
            return true;
        }

        if (option.data.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
            option.data.lastname.toLowerCase().includes(searchText.toLowerCase())) {
            return true
        }

        return false;
    }

    return (
        <Select
            onChange={onChange}
            className="create-members-select members-select max-w-[600px] w-full"
            options={options}
            menuPortalTarget={document.body}
            menuPosition={'fixed'}
            styles={{
                menuPortal: provided => ({
                    ...provided,
                    zIndex: 99999
                }),
                multiValue: (base) => ({
                    ...base,
                    display: `flex`,
                    border: `none`,
                    borderRadius: `25px`,
                    backgroundColor: `#F8F8FD`,
                    alignItems: `center`,
                }),
                control: (base) => ({
                    ...base,
                    borderRadius: `10px`,
                    border: `1px solid #EBEBEB`,
                    height: `fit-content`,
                }),
                indicatorSeparator: (base) => ({
                    ...base,
                    width: `0`,
                }),
                multiValueRemove: (base) => ({
                    ...base,
                    border: `none`,
                    height: '100%',
                    "&:hover": {
                        backgroundColor: `#fff`,
                        color: `#fff`,
                    }
                }),
                multiValueLabel: (base) => ({
                    ...base,
                    color: '#342F5C',
                    fontSize: `12px`,
                    lineHeight: `28px`,
                }),
                valueContainer: (base) => ({
                    ...base,
                    padding: `0 6px`,
                }),
                noOptionsMessage: (base) => ({
                    ...base,
                    fontFamily: `Poppins`,
                    fontSize: `12px`,
                    lineHeight: `28px`,
                    color: '#342F5C',
                }),
                placeholder: (base) => ({
                    ...base,
                    fontSize: '12px'
                }),
                menu: (base) => ({
                    ...base,
                    zIndex: '2',
                    borderRadius: `10px`,
                    border: `1px solid #EBEBEB`,
                    fontSize: '12px'
                })
            }}
            closeMenuOnSelect={closeMenuOnSelect}
            isMulti={isMulti}
            isDisabled={isDisabled}
            filterOption={customFilter}
            autoBlur={true}
            value={value}
            placeholder={placeholder}
            isClearable={false}
            components={{MultiValueRemove, NoOptionsMessage}}
        />
    )
}

export default CustomSelect;
