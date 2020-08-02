---
title: 'SFWRTECH 3IT3 Lab #1 Layer 3 and 4 Protocols'
categories:
  - Lab
tags:
  - SFWRTECH 3IT3
date: 2020-05-28 18:05:40
updated: 2020-05-28 18:05:40
---

Course section: SFWRTECH 3IT3:Fundamentals of Networking - SFWRTECH_3IT3_poonh_2205

SFWRTECH 3IT3 – Fundamentals of Networking

Lab #1: Layer 3 and 4 Protocols

Following & Answers Record

<!-- more -->

# VM

Default gateway : 10.0.2.1

Windows1 IP : 10.0.2.4
Windows2 IP : 10.0.2.5
CentOS01 IP : 10.0.2.8 (with httpd)
CentOS02 IP : 10.0.2.9

## Step 8

```
ipconfig /all
```

## Step 9

```
netsh interface ipv4 set dns "Ethernet" static 8.8.8.8 primary
netsh interface ipv4 add dns "Ethernet" 192.168.1.1
ipconfig /all
```

Differences between dynamic and manual IP config:
- DHCP enabled in dynamic and disabled in manual
- DHCP server in dynamic is 10.0.2.3 but disappeared in manual

## Step 12

Show ARP cache

```
arp -a
```

Result:

```
Physical Address of 10.0.2.4 : 08-00-27-c8-13-4b

Interface: 10.0.2.4 --- 0x3
internet Address | Physical Address | Type         | Purpose
10.0.2.1           52-54-00-12-35-00  dynamic        Default Gateway
10.0.2.3           08-00-27-75-7c-58  dynamic        DHCP Server
10.0.2.5           08-00-27-2b-a4-3e  dynamic        Neighbouring VM
10.0.2.255         ff-ff-ff-ff-ff-ff  static         Directed Broadcast
224.0.0.22         01-00-5e-00-00-16  static
224.0.0.251        01-00-5e-00-00-fb  static
224.0.0.252        01-00-5e-00-00-fc  static
255.255.255.255    ff-ff-ff-ff-ff-ff  static         Flooded Broadcast

224.0.0.22 were appeared after browsing a website.

Wireshark OUI Lookup Tool: https://www.wireshark.org/tools/oui-lookup.html

OUI for 08-00-27 : PCS Computer Systems GmbH
```

## Step 13

Using `Windows1 10.0.2.4` ,
delete all entries in ARP cache `arp -d`

```
arp -d
arp -a
ping 10.0.2.5
arp -a
```

A new entry `10.0.2.5 08-00-27-2b-a4-3e` was created in ARP cache after `ping 10.0.2.5`.

There is no ARP entry for default gateway because `Windows2 10.0.2.5` is in the same subnet that `Windows1 10.0.2.4` in, so data can be sent directly to neighbours and not to the gateway to handle further.

I can use `ipconfig` command to get the ARP entry for default gateway.

## Step 14

After change MAC of `Windows2 10.0.2.5` from `08-00-27-2b-a4-3e` to `08-00-27-11-22-33` and run `arp -a` on `Windows1 10.0.2.4`, the ARP entry of `Windows2 10.0.2.5` is dynamically changed to `08-00-27-11-22-33`. (yes, if I switch Windows1 quickly enough, the MAC is not changed yet)

I ping to `Windows2 10.0.2.5` and receive 4 `Request timed out` after MAC changed.

## Step 15

After I select “Turn on Windows Defender Firewall” under the
“Public network settings” on `Windows2 10.0.2.5`, `Windows1 10.0.2.4` receives 4 `Request timed out` on running `ping 10.0.2.5`.

## Step 19

```
su -
yum -y install nc httpd
yum -y install nc
```

## Step 20

Create `index.html` file

```
<html><body>Hello World</body></html>
```

Save to `/var/www/html/index.html`

## Step 21

Run `ifconfig` or `ip addr` on CentOS01, find device `enp0s3` with `inet 10.0.2.8/24`

Run
```
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload
```
on CentOS01

Run `ifconfig` or `ip addr` on CentOS02, find device `enp0s3` with `inet 10.0.2.9/24`

## Step 22

Start Apache web server

```
systemctl enable httpd.service
systemctl start httpd.service
```

## Step 23

I can see the "Hello World" page through `CentOS02 10.0.2.9` by browsing `10.0.2.8`

## Step 24

Run `nc -ul 1234` on `CentOS01 10.0.2.8` and `nc 10.0.2.8 -u 1234` on `CentOS02 10.0.2.9`

Then type `abc` on `CentOS02 10.0.2.9` and press Enter. I receive "no route to host".

Then release port number `1234` using `udp` from firewall of `CentOS01 10.0.2.8`

```
firewall-cmd --zone=public --add-port=1234/udp --permanent
firewall-cmd --reload
```

## Step 25

If I first try to send a message from `CentOS01 10.0.2.8`, nothing happens, because UDP protocal is connectionless. The server `CentOS01 10.0.2.8` is just listening to `port 1234` but it does not have connection to the client `CentOS02 10.0.2.9` because the client `CentOS02 10.0.2.9` does not need to build connection with the server `CentOS01 10.0.2.8` very firstly before sending out messages.

## Step 26

Run `nc -l 5678` on `CentOS01 10.0.2.8` and `nc 10.0.2.8 5678` on `CentOS02 10.0.2.9`.

This returns "no route to host" again because `port 5678` is not released from the firewall. A TCP `RST` flag is sent back to `CentOS02 10.0.2.9` so `CentOS02 10.0.2.9` knows the connection is aborted.

## Step 27

Release port number `5678` using `tcp` from firewall of `CentOS01 10.0.2.8`

```
firewall-cmd --zone=public --add-port=5678/tcp --permanent
firewall-cmd --reload
```

## Step 28

I first try to send a message from the server `CentOS01 10.0.2.8`, and the client `CentOS02 10.0.2.9` gets the message because both sides must have connection built under TCP protocal before any messages sent.

When I press `CTRL + C` on the client `CentOS02 10.0.2.9`, the server `CentOS01 10.0.2.8` is also down because the client `CentOS02 10.0.2.9` sends out a `FIN` flag and expects to end the connection. The server `CentOS01 10.0.2.8` sends a `FIN` flag again with a `ACK` flag for confirming, and the client `CentOS02 10.0.2.9` confirms that. TCP protocal only allows point to point transport due to one connection.

## Step 29

Run `route -n` on `CentOS01 10.0.2.8` to identify the default gateway.

Run `cat /etc/resolv.conf` on `CentOS01 10.0.2.8` to check DNS config.

## Post-Lab Questions

An ARP cache may contain multiple entries with the same MAC address, even though the IP addresses listed are different. This commonly occurs in some networks. Describe the configuration of network devices that could result in this behaviour.

Answer:
1. A network with hosts that have a NIC binded with multiple IP addresses
2. Web server binded with IP addresses, so that the website can be surfed through multiple IP addresses

In classful IP addressing, what classful network would your Windows and CentOS IP addresses normally belong to? What “class” do they actually belong to, and why? Write the network address for the VMs in CIDR notation. What is the maximum number of hosts that can be configured in this subnet?

Answer:
Subnet Mask is `255.255.255.0` so it is actually a `Class C` => Network Address `10.0.2.0/24`. Number of possible hosts: `2 ^ 8 - 2 = 254`.

How could a computer detect an IP address conflict in the network when starting up, before it finishes loading its own IP network configuration? In other words, how could a computer determine whether an IP address is already in use on the network before it attempts to configure its network interface using the same address (which would then result in a conflict)?

Answer:
1. Ask DHCP server to get a valid IP address.
2. Ping all possible IP addresses to see which is not in use.
