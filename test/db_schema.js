module.exports =  {
    "database": "db_template",
    "tables": [
        {
            "table_name": "tbl_Company",
            slug: true,
            "columns": [
                {
                    "column_name": "name",
                    "type": "string",
                    "unique": true,
                    "required": true
                },
                {
                    "column_name": "legal_name",
                    "type": "string",
                    "required": true
                }
            ]
        },
        {
            "table_name": "tbl_User",
            "columns": [
                {
                    "column_name": "username",
                    "type": "string",
                    "required": true,
                    "index": true,
                    "validations": {
                        alphanum: true,
                        min: 5,
                        max: 6
                    }
                },
                {
                    "column_name": "company_id",
                    "type": "uuid",
                    "foreign_key": true,
                    "required": true,
                    "reference_table": "tbl_Company",
                    "reference_column": "id",
                    "on_update": 'CASCADE',
                    "on_delete": 'RESTRICT'
                }
            ]
        }
    ]
}