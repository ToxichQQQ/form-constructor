import _ from "lodash";

export const duplicatedValues = (config) => {
    let allFields = [];

    config.map((page) =>
        page.sections.map((section) =>
            section.fields.map((field) => allFields.push(field.config.fieldName))
        )
    );

    const duplicates = _.filter(allFields, (value, index, iteratee) =>
        _.includes(iteratee, value, index + 1)
    );
    return duplicates;
};