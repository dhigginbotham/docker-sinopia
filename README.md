# docker-sinopia
Docker Container for sinopia with default htpasswd authentication

# overwrite config

You can overwrite all configs in the following schema:

`sinopia_name`
`sinopia_nested__property__even_deeper`

# options

 - `sinopia_auth__htpasswd__max_users ='1000'`
 - `sinopia_extra__packages='{"groupprefix-*": { "access": "$authenticated" }}'`
 - `sinopia__extra__packages='{"groupprefix-*": { "publish": "group-one, group-two, user-one" }}'`
