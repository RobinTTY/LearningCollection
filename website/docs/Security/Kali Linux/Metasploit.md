# Metasploit

The Metasploit Project is a computer security project that provides information about security vulnerabilities and aids in penetration testing and IDS signature development. It is owned by Boston, Massachusetts-based security company Rapid7.

## Start Metasploit

```shell
msfconsole
```

## Set a global parameter

To set a global parameter we use:

```shell
setg <parameterName> <parameterValue>
```

## Search for a module

```shell
search [<options>] [<keywords>:<value>]
```

### Examples

```shell
search cve:2009 type:exploit
search cve:2009 type:exploit platform:-linux
search cve:2009 -s name
search type:exploit -s type -r
```

## Load a module

Interact with a module by name or search term/index.
If a module name is not found, it will be treated as a search term.
An index from the previous search results can be selected if desired.

```shell
use <name|term|index>
```

### Examples

```shell
use exploit/multi/http/apache_mod_cgi_bash_env_exec
```

## Show module info

When a module is currently loaded:

```shell
show info       # basic info
show advanced   # advanced info
```

## Set an option of a module

When a module is currently loaded:

```shell
set <optionName> <optionValue>
```

### Example

```shell
set RHOSTS 192.168.178.10
```

## Start exploit

```shell
run
```

## Sessions

### Switch current session to the background

It can be helpful to switch a session to the background when interacting with a shell on a target. We can use _"bg"_ to switch the current session to the background:

```shell
bg
```

### Switch session to the foreground

To get a session back to the fremground, we use _"sessions"_ to list all active sessions.

```shell
sessions
```

Switch to an active session:

```shell
sessions <index>
```

## Load a module in a session

We can load module in a session (e.g. on a target host) by using:

```shell
use <moduleName>
set SESSION <sessionIndex>
run
```

This will launch the module in the target session.
